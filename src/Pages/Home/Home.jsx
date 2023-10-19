import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import About from "../../Components/About/About";
import Features from "../../Components/Features/Features";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <About></About>
            <Features></Features>
        </div>
    );
};

export default Home;