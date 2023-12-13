
import LandingPage from "../components/LandingPagePhone";
import SliderBanner from "../components/SliderBanner/SliderBanner";
import AddProductPage from "./AddProductPage";
import BrandsPage from "./BrandsPage";

const HomePage = () => {
    return (
        <>
        <div> 
            <SliderBanner> </SliderBanner>
        </div>
        
        <BrandsPage></BrandsPage>
        <AddProductPage></AddProductPage>
        <LandingPage />

        </>
    );
};

export default HomePage;