import palm from '../../assets/palm.png';
import organic from '../../assets/organic.png';
import jojoba from '../../assets//jojoba.png';
import avocado from '../../assets/avocado.png';

const OurFacts = () => {
    return (
        <div className='text-center font-Poppins my-12 mt-32'>
            <h1 className='text-[#262626] text-3xl font-bold'>Our Cosmetics Facts</h1>
            <p className='text-[#505050] text-sm my-4'>Inspired by hydration and Japan{"'"}s beauty rituals, Ehya Cosmetics focuses on the core <br /> elements of skincare to combine powerful ingredients backed by science and <br /> authentically.</p>
            <div className='grid grid-cols-4 mt-6'>
                <div className=''>
                    <img className='w-16 h-16 text-center mx-auto' src={palm} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Palm Oil</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
                <div>
                    <img className='w-16 h-16 text-center mx-auto' src={organic} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Organic Glyserine</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
                <div>
                    <img className='w-16 h-16 text-center mx-auto' src={jojoba} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Jojoba Oil</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
                <div>
                    <img className='w-16 h-16 text-center mx-auto' src={avocado} alt="" />
                    <h2 className='text-[#262626] text-xl font-semibold my-2'>Avocado Extract</h2>
                    <p className='text-[#505050] text-sm my-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Congue amet aenean sed enim <br /> odio. </p>
                </div>
            </div>
        </div>
    );
};

export default OurFacts;