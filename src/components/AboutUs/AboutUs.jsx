import onnebw from "../../assets/onne-bw.png";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-24 font-Poppins mt-28">
      <div className="">
        <img
          className="w-1/2 h-full bg-[#F4F4F4]  border-[#262626] text-center mx-auto"
          src={onnebw}
          alt=""
        />

        <div>
          <div className="w-[366px] h-[375px] border-dashed border-2 border-[#262626] relative ms-[135px] -mt-[367px] rounded-lg"></div>
          <div className="w-[366px] h-[375px] border-dashed border-2 border-[#262626] relative ms-[115px] -mt-[357px] rounded-lg"></div>
          <div className="w-3 h-3 bg-[#FFAF00] relative ms-[496px] -mt-[397px] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FFAF00] relative ms-[114px] mt-[379px] rounded-full"></div>
        </div>
      </div>
      <div className="">
        <p className="text-[#262626] text-md font-semibold">A bit</p>
        <h1 className="text-[#262626] text-3xl font-bold my-4">About Us</h1>
        <p className="text-[#505050] text-sm mb-6">
          Care beauty dolor sit amet, consectetur adipiscing elit. Congue <br />{" "}
          amet aenean sed enim odio. Tellus tristique ipsum congue <br /> semper
          pretium nibh tellus, diam. Mi, ac sit risus risus netus in <br />{" "}
          accumsan. Facilisi aliquam duis velit sed. Sed id nisl velit, massa{" "}
          <br /> morbi purus pellentesque. Libero convallis scelerisque quam in
          at <br /> tincidunt. Rutrum tristique fusce pretium aliquet egestas
          faucibus <br /> tortor tortor in.
        </p>
        <button className="btn bg-[#FFAF00] text-white rounded-br-3xl hover:text-black">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
