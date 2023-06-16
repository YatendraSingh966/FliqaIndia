import React from "react";

const SearchSearvice = () => {
  return (
    <div>
      <p className="font-[700] text-[64px]">
        India’s Leading Creative Platform
      </p>
      <p className="font-[300] text-[32px] text-[#4C696D]">
        Experience hassle free bookings. Trusted by 2500+ Customers
      </p>
      <div className="flex justify-center relative">
        <div className="w-[995px] h-[51px] flex">
          <input
            className="pl-[173px] w-[100%] h-[51px] border border-black rounded-[34px]"
            type="text"
            placeholder="Search service, blog and many more…"
          />
          <button className="absolute right-[263px] top-0 h-[51px] text-white bg-[#221010] w-[277px] rounded-[34px]">
            Search
          </button>
        </div>
      </div>
      <div className="flex mt-[36.78px] w-[100%] justify-center">
        <div className="flex items-center">
          <img
            className="w-[142.17px] h-[128px]"
            src="./images/Group1.png"
            alt=""
          />
          <div>
            <p className="font-[700] text-[24px]">Verified Reviews</p>
            <p className="font-[300] text-[16px]">For verified reviewers</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[142.17px] h-[128px] mr-[22px]"
            src="./images/Group2.png"
            alt=""
          />
          <div>
            <p className="font-[700] text-[24px]">Top Articles</p>
            <p className="font-[300] text-[16px]">Helps you decide</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[142.17px] h-[128px] mr-[22px]"
            src="./images/Group3.png"
            alt=""
          />
          <div>
            <p className="font-[700] text-[24px]">Write Share Win Contest</p>
            <p className="font-[300] text-[16px]">Earn cash for reviews</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[142.17px] h-[128px] mr-[22px]"
            src="./images/Group4.png"
            alt=""
          />
          <div>
            <p className="font-[700] text-[24px]">MouthShut for Brands</p>
            <p className="font-[300] text-[16px]">Request a Demo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">

      <div className="w-[1462px] border border-black" />
      </div>
    </div>
  );
};

export default SearchSearvice;
