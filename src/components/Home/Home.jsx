import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChoseUs from "../ChoseUs/ChoseUs";
import OurFacts from "../OurFacts/OurFacts";
import ProductNameSection from "../ProductSection/ProductNameSection";
import PuritySource from "../PuritySource/PuritySource";
import Testimonials from "../Testimonials/Testimonials";
import WorldWideClient from "../WorldWideClient/WorldWideClient";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorldWideClient></WorldWideClient>
            <ChoseUs></ChoseUs>
            <AboutUs></AboutUs>
            <OurFacts></OurFacts>
            <PuritySource></PuritySource>
            <Testimonials></Testimonials>
            <ProductNameSection></ProductNameSection>
        </div>
    );
};

export default Home;