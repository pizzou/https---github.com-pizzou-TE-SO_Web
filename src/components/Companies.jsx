import React from "react";
import com1 from "../assets/teso.jpg";

const Companies = () => {
  return (
    <section className="text-center">
      <p className="text-primary font-normal text-sm py-3"></p>
      <h1 className="md:text-3xl text-xl font-semibold">
        Trusted by Big Companies
      </h1>
      <div
        className="flex justify-center flex-wrap md:w-2/3 my-16 mx-auto gap-x-20
      md:gap-y-12 gap-y-8"
      >
        <img src={com1} alt="logo" className="h-12" />
        <img src={com1} alt="logo" className="h-12" />
        <img src={com1} alt="logo" className="h-12" />
        <img src={com1} alt="logo" className="h-12" />
        <img src={com1} alt="logo" className="h-12" />
      </div>
    </section>
  );
};

export default Companies;
