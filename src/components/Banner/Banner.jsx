import onneb from '../../assets/onne-b.png';
import profile3 from '../../assets/profile3.png';
import profile2 from '../../assets/profile2.png';
import profile1 from '../../assets/profile1.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-4 m-4 font-Vidaloka mt-20 mb-12'>
            <div>
                <h1 className='text-6xl mb-6 font-semibold'>True <span className='text-[#FFAF00]'>Beauty</span></h1>
                <h2 className='text-4xl mb-10 font-semibold'>can radiate your uniqueness</h2>
                <p className='mb-8 text-[#505050] font-[20px] font-Poppins'>K-Beauty got us hooked on Korean BB Creams and jelly cleansers. J-Beauty <br /> convinced us of the benefits of Japanese essences and sake ingredients. <br /> Probably we were bound to grab our beauty passports and move on to <br /> another country. And so we did: Now there{"'"}s G-Beauty.</p>
                <div className="flex gap-4 mb-8">
                    <button className="btn bg-[#262626] text-white rounded-br-3xl px-10 hover:text-black">View Details</button>
                    <button className="btn bg-[#FFAF00] text-white rounded-bl-3xl px-10 hover:text-black">Add To Cart</button>
                </div>
                <div className="flex gap-20 font-Poppins">
                    <div>
                        <h2 className='mb-2 text-[#262626] font-semibold text-lg'>Meterial</h2>
                        <p className='text-[#505050]'>K-Beauty got us hooked on <br /> Korean BB Creams and jelly <br /> cleansers.</p>
                    </div>
                    <div>
                        <h2 className='mb-2 text-[#262626] font-semibold text-lg'>Care</h2>
                        <p className='text-[#505050]'>K-Beauty got us hooked on <br /> Korean BB Creams and jelly <br /> cleansers.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="bg-[#FFAF00] w-2/3 radius-b">
                    <img className='w-full h-full' src={onneb} alt="" />
                </div>
            </div>


            <div className='bg-[#FFAF00] rounded-full w-24 h-24 relative ms-[500px] -mt-[80px]'>
                    <img className='w-24 h-24 rounded-full' src={profile3} alt="" />
            </div>
            <div className='bg-[#FFAF00] rounded-full w-16 h-16 relative ms-[500px] -mt-[440px]'>
                    <img className='w-16 h-16 rounded-full' src={profile2} alt="" />
            </div>
            <div className='bg-[#FFAF00] rounded-full w-20 h-20 relative ms-[440px] -mt-[580px]'>
                    <img className='w-20 h-20 rounded-full' src={profile1} alt="" />
            </div>

            <div className='w-60 h-60 border-s-2 border-t-2 border-solid border-black relative -ms-[20px] -mt-[550px] rounded-tl-3xl'>
                    
            </div>
            <div className='w-60 h-60 border-e-2 border-b-2 border-solid border-black relative ms-[830px] -mt-[350px] rounded-br-3xl'>
                    
            </div>
            <div className='w-4 h-4 bg-black relative ms-[190px] -mt-[117px] rounded-full'>
                    
            </div>
            <div className='w-4 h-4 bg-[#FFAF00] relative ms-[1060px] -mt-[376px] rounded-full'>
                    
            </div>
            <div className='w-4 h-4 bg-[#FFAF00] relative -ms-[26px] -mt-[345px] rounded-full'>
                    
            </div>
            <div className='w-4 h-4 bg-black relative ms-[850px] -mt-[604px] rounded-full'>
                    
            </div>
        </div>
    );
};

export default Banner;