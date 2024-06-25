const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;
const AdminLoginRegister = require("../../../models/Admin/AdminRegisterLogin/adminModel");

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, input, password, role } = req.body;
  let isValid = false;
  let msg = "";
  let imageUrl = "";

  if (!name || !input || !password || !role) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      msg: "Password must be at least 6 characters long.",
    });
  }

  const file = req.files && req.files.imageUrl;
  if (!file) {
    return res.status(400).json({ message: "File not provided" });
  }

  const supportedTypes = ["jpg", "jpeg", "png"];
  const fileType = file.name.split(".").pop().toLowerCase();

  if (!supportedTypes.includes(fileType)) {
    return res.status(400).json({
      success: false,
      message: "File format not supported",
    });
  }

  const response = await uploadFileToCloudinary(file, "Zummit").catch(error => {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ success: false, message: "File upload failed" });
    return;
  });

  if (!response) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input)) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter a valid email address." });
  }

  const adminExists = await AdminLoginRegister.findOne({ input }).select("-password");
  if (adminExists) {
    return res
      .status(400)
      .json({ success: false, msg: "Admin already registered." });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new AdminLoginRegister({
      name,
      input,
      role,
      password: hashedPassword,
      imageUrl: response.secure_url,
    });

    await admin.save();

    if (admin) {
      const { _id, input, role } = admin;
      const token = generateToken(_id);
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
      });
      res.status(201).json({
        success: true,
        admin : {
          name : admin.name,
          input : admin.input,
          role : admin.role,
          imageUrl : admin.imageUrl,
          id : admin._id,
          createdAt : admin.createdAt,
          updatedAt : admin.updatedAt
        },
        message: "Admin registered successfully.",
        token,
      });
    } else {
      res.status(400).json({ error: "Invalid admin data" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { input, password } = req.body;

  if (!input || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select(
      "+password"
    );

    if (!admin) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    const isMatch = await admin.matchPasswords(password);

    if (admin && isMatch) {
      res.status(200).json({
        success: true,
        _id: admin._id,
        name: admin.name,
        input: admin.input,
        role: admin.role,
        imageUrl:admin.imageUrl,
        createdAt: admin.createdAt,
        updatedAt: admin.updatedAt,
        token: generateToken(admin._id),
      });
    } else {
      return res.status(400).json({ message: "Please check your password" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = {
  registerAdmin,
  loginAdmin,
};