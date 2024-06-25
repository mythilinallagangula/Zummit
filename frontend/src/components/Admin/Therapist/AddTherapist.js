import React from "react";

const AddTherapist = () => {
  return (
    <div className="w-full m-10">
      <div className="w-[95%] flex justify-between items-center text-2xl ">
        <h1>Appointments</h1>
        <div className="p-2  cursor-pointer   rounded-full ">
          <svg
            width="45"
            height="45"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="white" />
            <path
              d="M26.306 36.0003C26.0716 36.4044 25.7351 36.7399 25.3303 36.973C24.9255 37.2062 24.4665 37.3289 23.9993 37.3289C23.5322 37.3289 23.0732 37.2062 22.6684 36.973C22.2636 36.7399 21.9271 36.4044 21.6927 36.0003M37.3327 30.667H10.666C11.7269 30.667 12.7443 30.2456 13.4944 29.4954C14.2446 28.7453 14.666 27.7279 14.666 26.667V20.0003C14.666 17.525 15.6493 15.151 17.3997 13.4007C19.15 11.6503 21.524 10.667 23.9993 10.667C26.4747 10.667 28.8487 11.6503 30.599 13.4007C32.3494 15.151 33.3327 17.525 33.3327 20.0003V26.667C33.3327 27.7279 33.7541 28.7453 34.5043 29.4954C35.2544 30.2456 36.2718 30.667 37.3327 30.667Z"
              stroke="#0190B1"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="29" y="8" width="8" height="8" rx="4" fill="#B00202" />
          </svg>
        </div>
      </div>
      <div className="px-10 shadow-lg  py-5 w-[70%] rounded-md bg-[#FDFEE6] mt-5">
        <div className="flex items-center mb-4">
          <h1 className="w-[8rem]">Name</h1>
          <input className="px-4  py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="flex items-center gap-10 mb-4">
          <h1 className="w-[5rem]">Email</h1>
          <input className="px-4 py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="flex items-center gap-10 mb-4">
          <h1 className="w-[5rem]">Role</h1>
          <input className="px-4 py-1 bg-[#E6E1E5] outline-none rounded-md w-full"  type="text" />
        </div>
        <div className="text-end">
          <button className="px-4 py-1 rounded-md bg-[#00677F] text-white cursor-pointer">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTherapist;
