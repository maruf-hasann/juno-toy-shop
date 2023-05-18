import React from 'react';
import img1 from '../../../assets/Gallery/post17-copyright.jpg'
import img2 from '../../../assets/Gallery/post18-copyright.jpg'
import img3 from '../../../assets/Gallery/post19-copyright.jpg'
import img4 from '../../../assets/Gallery/one.jpg'
import img6 from '../../../assets/Gallery/three.jpg'



const Gallery = () => {
    return (
      <div className='mb-14'>
        <h1 className="text-5xl text-center font-bold text-[#181d4e] mb-13 ">
          Our Gallery
        </h1>
        <div className="lg:flex gap-8 my_container lg:items-center space-y-5 lg:space-y-0">
          <div className="lg:w-3/5 mt-7">
            <div className="h-full rounded-lg">
              <img src={img1} className="rounded-2xl" alt="" />
            </div>
          </div>
          <div className="lg:w-2/5 space-y-5 lg:space-y-0">
            <div className="lg:w-1/2 lg:flex lg:gap-3 lg:mb-4 space-y-5 lg:space-y-0">
              <img src={img2} alt="" className=" object-cover rounded-xl" />
              <img src={img3} alt="" className="rounded-xl" />
            </div>
            <div className="lg:w-1/2 lg:flex lg:gap-4 space-y-5 lg:space-y-0">
              <img src={img6} alt="" className=" object-cover rounded-xl" />
              <img src={img4} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;