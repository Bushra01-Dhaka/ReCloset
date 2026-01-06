import Marquee from "react-fast-marquee";

import img1 from "../../assets/NGO/1.png";
import img2 from "../../assets/NGO/2.png";
import img3 from "../../assets/NGO/3.png";
import img4 from "../../assets/NGO/4.png";
import img5 from "../../assets/NGO/5.png";


const NgoMarques = () => {
  return (
    <div className="flex justify-center items-center px-10">
      <div className="py-6">
        <h3 className="text-2xl text-center font-bold text-secondary pt-6 pb-10">
          Trusted NGOs We Work With
        </h3>
        <Marquee>
          <div className="flex justify-center items-center gap-10">
            <img className="w-[150px] h-[150px]" src={img1} alt="" />
            <img className="w-[150px] h-[150px]" src={img2} alt="" />
            <img className="w-[150px] h-[150px]" src={img3} alt="" />
            <img className="w-[150px] h-[150px]" src={img4} alt="" />
            <img className="w-[150px] h-[150px]" src={img5} alt="" />
     
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default NgoMarques;
