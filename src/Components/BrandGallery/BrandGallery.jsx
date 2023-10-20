
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GallerySlider from '../GallerySlider/GallerySlider';
import GalleryCard from '../GalleryCard/GalleryCard';
import { AiOutlineStop } from 'react-icons/ai';

// AiOutlineStop

const BrandGallery = () => {

    const [gBrand, setGBrand] = useState({})
    const [bProducts, setBProducts] = useState([]);
    const [flteredProducts, setFilterProducts] = useState([]);


    const totalBrand = useLoaderData();
    const brand_name = useParams();

    useEffect(() => {

        const filterBrand = totalBrand.find(brand => brand.brand_name == brand_name.brand_name);
        setGBrand(filterBrand);


    }, [totalBrand, brand_name])

    useEffect(() => {

        fetch('https://brand-shop-server-etvnzft76-almamun168652-gmailcom.vercel.app/products')
            .then(res => res.json())
            .then(data => setBProducts(data));

    }, [])

    useEffect(() => {
        const filterData = bProducts.filter(product => product.brand == brand_name.brand_name);
        setFilterProducts(filterData);
    }, [bProducts, brand_name])


    return (
        <div className='my-10 max-w-screen-xl px-4 mx-auto'>
            {/* slider */}
            <div className=' max-h-[80vh]'>
                <GallerySlider gBrand={gBrand}></GallerySlider>
            </div>

            <div>
                {
                    flteredProducts.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                        {
                            flteredProducts.map(oneBrand => <GalleryCard key={oneBrand._id} oneBrand={oneBrand}></GalleryCard>)
                        }
                    </div> :
                        <div className='flex justify-center items-center h-[50vh] text-3xl font-bold'>
                            <div>
                                <AiOutlineStop className='text-5xl text-red-600 mx-auto mb-5'></AiOutlineStop>
                                <h1>No Product Here</h1>
                            </div>
                        </div>
                }
            </div>


        </div>
    );
};

export default BrandGallery;