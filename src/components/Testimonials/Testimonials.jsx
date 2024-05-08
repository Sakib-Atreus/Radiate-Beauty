import { IoArrowBackCircleOutline, IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import shopia from "../../assets/profile4.jpg";
import ainee from "../../assets/profile5.jpg";
import alina from "../../assets/profile6.jpg";

const Testimonials = () => {
  return (
    <div className="px-12">
      <div className="flex justify-between mb-12">
        <h1 className="text-[#262626] text-3xl font-bold">Testimonials</h1>
        <div className="flex gap-1 items-center">
          <IoArrowBackCircleOutline className="w-12 h-12 text-[#FFAF00]" />
          <IoArrowForward className="w-10 h-10 p-1 bg-[#FFAF00] rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-3 mb-12">
        <div className="card w-96 bg-base-100">
          <div className="card-body items-left text-left">
            <div className="text-[#FFAF00] flex gap-1 text-xs mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#505050] text-sm mb-6">
              K-Beauty got us hooked on Korean <br /> BB Creams and jelly
              cleansers. J-br Beauty convinced us of the <br /> benefits of
              Japanese essences and <br /> sake ingredients.{" "}
            </p>
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={shopia} alt="" />
              <div>
                <h4 className="text-[#262626] text-md font-bold">Shopia</h4>
                <p className="text-[#9C9C9C]">CBO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg">
          <div className="card-body items-left text-left">
            <div className="text-[#FFAF00] flex gap-1 text-xs mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#505050] text-sm mb-6">
              K-Beauty got us hooked on Korean <br /> BB Creams and jelly
              cleansers. J-br Beauty convinced us of the <br /> benefits of
              Japanese essences and <br /> sake ingredients.{" "}
            </p>
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={ainee} alt="" />
              <div>
                <h4 className="text-[#262626] text-md font-bold">Ainne</h4>
                <p className="text-[#9C9C9C]">Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100">
          <div className="card-body items-left text-left">
            <div className="text-[#FFAF00] flex gap-1 text-xs mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-[#505050] text-sm mb-6">
              K-Beauty got us hooked on Korean <br /> BB Creams and jelly
              cleansers. J-br Beauty convinced us of the <br /> benefits of
              Japanese essences and <br /> sake ingredients.{" "}
            </p>
            <div className="flex gap-4">
              <img className="w-12 h-12 rounded-full" src={alina} alt="" />
              <div>
                <h4 className="text-[#262626] text-md font-bold">Alina</h4>
                <p className="text-[#9C9C9C]">Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
