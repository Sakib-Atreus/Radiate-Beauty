import { FaStar } from "react-icons/fa";

const WorldWideClient = () => {
  return (
    <div className="bg-[#F9FBFE] font-Poppins grid grid-cols-2 justify-center text-left items-center p-20 my-12">
      <div>
        <h1 className="text-[#262626] text-3xl font-bold">
          Trusted By Over <span className="text-[#FFAF00]">400,000</span>+
          <span className="text-[#FFAF00]">Client</span> <br /> Worldw ide Since{" "}
          <span className="text-[#FFAF00]">2002</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 text-center">
        <div className="">
          <h1 className="text-[#262626] text-3xl font-bold mb-2">4.6</h1>
          <div className="text-[#FFAF00] flex gap-1 justify-center text-xs mb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>3500 Ratings</p>
        </div>
        <div>
          <h1 className="text-[#262626] text-3xl font-bold mb-2">6M+</h1>
          <p>
            Worldwide Product <br /> Sale per year
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldWideClient;
