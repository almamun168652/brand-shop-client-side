import PropTypes from 'prop-types';
import OneBrand from '../OneBrand/OneBrand';


const Brands = ({brands}) => {

    console.log(brands);

    return (
        <div className='max-w-screen-xl px-4 mx-auto my-20'>

            <div className='mb-6'>
                <h1 className='text-center text-4xl font-bold'>Our Brands</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    brands.map(brand => <OneBrand key={brand.id} brand={brand}></OneBrand>)
                }
            </div>
            
        </div>
    );
};

Brands.propTypes = {
    brands: PropTypes.array
}


export default Brands;