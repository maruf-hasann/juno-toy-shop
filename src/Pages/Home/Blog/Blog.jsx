import React from "react";
import blog1 from "../../../assets/Gallery/Rectangle-10.jpg";
import blog2 from "../../../assets/Gallery/post18-copyright.jpg";
import blog3 from "../../../assets/Gallery/post19-copyright.jpg";
import blog4 from "../../../assets/Gallery/post21-copyright.jpg";

const Blog = () => {
  return (
    <div className="my_container my-10">
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">Blogs</h1>
      <div className="flex gap-4 mt-14">
        <div className="flex p-3 bg-[#edf3e2] rounded-xl gap-6 items-center">
          <img src={blog1} alt="" className="w-1/2 h-auto rounded-xl" />

          <div className="space-y-4">
            <p className="text-gray-400 font-semibold">Feb 10, 2023</p>
            <h3 className="text-3xl font-bold text-black">
              Cute little girl with teddy bear
            </h3>
            <button className="button">Read More</button>
          </div>
        </div>{" "}
        <div className="flex bg-[#faf7eb]  rounded-xl gap-6 items-center">
          <img src={blog2} alt="" className="w-1/2 h-auto rounded-xl" />

          <div className="space-y-4">
            <p className="text-gray-400 font-semibold">Feb 29, 2023</p>
            <h3 className="text-3xl font-bold text-black">
              Toy, earmuffs and dummy
            </h3>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>{" "}
      <div className="flex gap-4 my-5 ">
        <div className="flex p-3 bg-[#faf7eb] rounded-xl gap-6 items-center">
          <img src={blog3} alt="" className="w-1/2 h-auto rounded-xl" />

          <div className="space-y-4">
            <p className="text-gray-400 font-semibold">Feb 10, 2023</p>
            <h3 className="text-3xl font-bold text-black">
              Cute little girl with teddy bear
            </h3>
            <button className="button">Read More</button>
          </div>
        </div>{" "}
        <div className="flex bg-[#edf3e2] rounded-xl gap-6 items-center">
          <img src={blog4} alt="" className="w-1/2 h-auto rounded-xl" />

          <div className="space-y-4">
            <p className="text-gray-400 font-semibold">Feb 29, 2023</p>
            <h3 className="text-3xl font-bold text-black">
              Teddy bears and animal pillows
            </h3>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
