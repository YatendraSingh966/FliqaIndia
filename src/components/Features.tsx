import React from "react";

const Features = () => {
  const FeatureCard = ({
    featureImg,
    title,
    price,
    day,
  }: {
    featureImg: string;
    title: string;
    price: string;
    day: string;
  }) => {
    return (
      <div className="ml-2 rounded-[10px] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] border border-black pb-2">
        <img src={featureImg} alt="" />
        <div className="flex justify-center flex-col text-center">
          <p className="text-[20px] text-[600]">{title}</p>
          <div className="border border-black" />
          <p className="text-[#4C696D]">
            <b>Starting at</b> {price} ({day})
          </p>
          <div className="flex justify-center">
            <button className="bg-[#4E99A4] rounded w-[202px] h-28px] mt-[30px]">
              Know more
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="text-left">
      <p className="ml-[40px] text-[#4C696D] text-[36px]">
        Our Featured Services{" "}
      </p>
      <p className="ml-[40px] text-[#0C0C0C] text-[20px]">
        Discover the range of services provided by FliqaIndia
      </p>
      <div className="flex">
        <div className="ml-[30px] bg-[#DDF8F3] rounded-[43px] h-[43px] w-[43px] flex items-center justify-center">
          <b>{"<"}</b>
        </div>
        <FeatureCard
          featureImg="./images/image1.png"
          title="Pre Wedding PhotoShoot"
          price="25,000"
          day="One Day"
        />
        <FeatureCard
          featureImg="./images/image2.png"
          title="Wedding Photoshoot"
          price="65,000"
          day="Two Day"
        />
        <FeatureCard
          featureImg="./images/image3.png"
          title="Portfolio Shoot"
          price="25,000"
          day="Standard price for 6-8 hours"
        />
        <FeatureCard
          featureImg="./images/image4.png"
          title="Birthday Baby Folio"
          price="15,000"
          day="One days"
        />
        <div className="bg-[#DDF8F3] rounded-[43px] h-[43px] w-[43px] flex items-center justify-center">
          <b>{">"}</b>
        </div>
      </div>
    </div>
  );
};

export default Features;
