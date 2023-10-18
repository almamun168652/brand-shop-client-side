
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import GallerySlider from '../GallerySlider/GallerySlider';

const BrandGallery = () => {

    const [gBrand , setGBrand] = useState({})

    const totalBrand = useLoaderData();
    const brand_name = useParams();

    useEffect(()=> {

        const filterBrand = totalBrand.find(brand => brand.brand_name.toLowerCase() == brand_name.brand_name.toLowerCase());

        setGBrand(filterBrand);
        
        
    } , [totalBrand , brand_name])
    



    return (
        <div className='my-10'>
            {/* slider */}
            <div className='max-w-screen-xl px-4 mx-auto max-h-[80vh]'>
                <GallerySlider gBrand={gBrand}></GallerySlider>
            </div>
        </div>
    );
};

export default BrandGallery;