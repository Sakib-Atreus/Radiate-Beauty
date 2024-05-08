import onnew from "../../assets/onne-w.png";
import onneb from "../../assets/onne-b.png";
import { FaCheck } from "react-icons/fa";

const PuritySource = () => {
  return (
    <div className="flex justify-around bg-[#F9FBFE] my-24 p-12 items-center">
      <div>
        <h1 className="text-[#262626] text-3xl font-bold">
          The Power <br /> of Purity Source
        </h1>
        <p className="text-[#505050] text-sm my-4">
          Inspired by hydration and Japan{"'"}s beauty rituals, uruoi focuses{" "}
          <br /> on the core elements of skincare to combine powerful <br />{" "}
          ingredients backed by science and authentically Japanese <br />{" "}
          minimalist philosophy.
        </p>
        <p className="text-[#505050] text-sm my-4">
          A blessing of water for every skin. Relieving dryness with gentle{" "}
          <br /> touch.
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-[#FFAF00] bg-[#ebe6e6] rounded-full" />
          Our Cosmetics is 100% from Natural Ingredients
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-[#FFAF00] bg-[#ebe6e6] rounded-full" />
          All of packaging process by modern machine{" "}
        </p>
        <p className="flex gap-2 items-center text-[#505050] text-sm ms-2">
          <FaCheck className="text-[#FFAF00] bg-[#ebe6e6] rounded-full" />
          You can return our product if not original
        </p>
      </div>
      <div className="flex">
        <div className="w-[180px] h-[180px] bg-[#FFAF00] mt-12 -ms-12">
          <img
            className="w-[220px] h-[240px] relative -mt-10 ms-16"
            src={onneb}
            alt=""
          />
        </div>
        <div className="w-[220px] h-[220px] bg-[#FFAF00] border-4 border-white -mt-8 -ms-[290px]">
          <img
            className="w-[220px] h-[280px] relative -mt-20"
            src={onnew}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PuritySource;
