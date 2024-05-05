import React from "react";

const Groups = () => {
  const groupsDetails = [
    {
      image:"../.././images/flower-img.png",
      email: "zummit-chandan@gmail.com",
      groupName: "Better Than Yesterday",
      purpose_Goals:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      sessionNumber: 10,
      slots: 10,
      startDate: "",
      price: "",
      time: {
        shift: "",
        hours: "",
      },
      selectDay: "",
    },
    {
      image:"../.././images/flower-img.png",
      email: "zummit-chandan@gmail.com",
      groupName: "Better Than Tomorrow",
      purpose_Goals: "Improving every minute",
      sessionNumber: 10,
      slots: 10,
      startDate: "",
      price: "",
      time: {
        shift: "",
        hours: "",
      },
      selectDay: "",
    },
    {
      image:"../.././images/flower-img.png",
      email: "zummit-chandan@gmail.com",
      groupName: "Better Than Tomorrow",
      purpose_Goals: "Improving every minute",
      sessionNumber: 10,
      slots: 10,
      startDate: "",
      price: "",
      time: {
        shift: "",
        hours: "",
      },
      selectDay: "",
    },
    {
      image:"../.././images/flower-img.png",
      email: "zummit-chandan@gmail.com",
      groupName: "Better Than Tomorrow",
      purpose_Goals: "Improving every minute",
      sessionNumber: 10,
      slots: 10,
      startDate: "",
      price: "",
      time: {
        shift: "",
        hours: "",
      },
      selectDay: "",
    },
    {
      image:"../.././images/flower-img.png",
      email: "zummit-chandan@gmail.com",
      groupName: "Better Than Tomorrow",
      purpose_Goals: "Improving every minute",
      sessionNumber: 10,
      slots: 10,
      startDate: "",
      price: "",
      time: {
        shift: "",
        hours: "",
      },
      selectDay: "",
    },
  ];
  return (
    <div className="w-full m-10 ">
      {/* Search Bar */}
      <div className="flex justify-center gap-10 items-center">
        <div className="flex items-center bg-white w-[70%] border  pl-4 rounded-lg border-[#B4F0FF] ">
          <svg
            width="25"
            height="26"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0004 21.5004L16.6504 17.1504"
              stroke="#787579"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="h-12 ml-5 rounded-lg outline-none w-[100%]"
          />
        </div>
        <div className="p-2 rounded-full ">
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
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl  my-8">Groups</h1>
        <button className="rounded-md py-2 px-4   text-lg bg-[#00677F] text-white">
         Create Now
        </button>
      </div>
    <div className="flex bg-white p-4 rounded-lg justify-between">
      {groupsDetails.map((item)=>(
        <div className="group w-72 my-2 bg-[#FDFEF1] p-[10px] rounded-lg hover:shadow-lg cursor-pointer">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative group-hover:scale-[1.05] transition ease-in-out duration-300 overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="w-60 m-auto"
            />
          </div>
          <div className="bg-[#F7F131] absolute rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] top-[5px] right-[20px]">
            <p>Starts: 16 March</p>
          </div>
        </div>
        <p className="w-full  text-center text-[#121014] pb-2 group-hover:underline">
          Lacus amet egestas ullamcorper fermentum
        </p>
        <p className="leading-[20px] text-base pl-2 text-[#272529]">
          Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty,
          Relationship Challenges, Quarter-Life Crisis, Couples Therapy
        </p>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Groups;