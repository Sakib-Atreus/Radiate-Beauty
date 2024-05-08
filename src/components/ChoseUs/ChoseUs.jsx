import natural from '../../assets/natural.png';
import quality from '../../assets/quality.png';
import shipping from '../../assets/shipping.png';

const ChoseUs = () => {
    return (
        <div className='text-center font-Poppins my-24'>
            <h1 className='text-[#262626] text-3xl font-bold'>Benefits To Chose Us!</h1>
            <p className='text-[#505050] text-sm my-4'>Inspired by hydration and Japan{"'"}s beauty rituals, Ehya Cosmetics focuses on the core <br /> elements of skincare to combine powerful ingredients backed by science and <br /> authentically.</p>
            <div className='grid grid-cols-3 mt-6'>
                <div className=''>
                    <img className='w-16 h-16 text-center mx-auto' src={natural} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Natural</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
                <div>
                    <img className='w-16 h-16 text-center mx-auto' src={quality} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Best Quality</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
                <div>
                    <img className='w-16 h-16 text-center mx-auto' src={shipping} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Free Shipping</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;