import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";

const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;