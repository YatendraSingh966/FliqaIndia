import React from "react";

const TrustedAssociate = () => {
  const NameCard = ({
    personImg,
    style,
  }: {
    personImg: string;
    style?: any;
  }) => {
    return (
      <div style={style}>
        <div className="rounded-[24px] bg-[#2c2c2c] h-[241px] w-[304px] ml-[28px] mt-[41px]">
          <img src={personImg} alt="" />
          <div className="flex ml-[17px] text-left justify-between items-center">
            <div>
              <p className="text-white text-[20px]">Name Title</p>
              <p className="text-white text-[16px]">Location:</p>
            </div>
            <div>
              <img src="./images/sun.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-[107px] bg-[#A1E3D8] h-[451px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#4C696D] text-[36px]">Find Trusted Associate</p>
          <p className="text-[#0C0C0C] text-[20px] ml-[80px]">
            Find the best Fliqa Associate for your special day.
          </p>
        </div>
        <div className="mr-[42px]">
          <p className="text-[#4C696D] font-[400] text-[24px]">
            See More {">>"}
          </p>
        </div>
      </div>
      <div className="flex">
        <NameCard
          style={{ marginLeft: "70px" }}
          personImg="./images/Rectangle1.png"
        />
        <NameCard personImg="./images/Rectangle2.png" />
        <NameCard personImg="./images/Rectangle3.png" />
        <NameCard personImg="./images/Rectangle4.png" />
      </div>
    </div>
  );
};

export default TrustedAssociate;
