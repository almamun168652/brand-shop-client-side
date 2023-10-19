import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const OneBrand = ({ brand }) => {

    const { brand_name, img } = brand || {}



    return (
        <div>
            <Link to={`/brand/${brand_name}`}>
                <div className='p-4 border shadow-xl dark:shadow-gray-600 rounded-lg cursor-pointer'>
                    <img className='w-full border border-white rounded-lg h-[180px] object-cover' src={img} alt="" />
                    <h1 className='text-center dark:text-white mb-4 mt-6 text-xl font-bold'>{brand_name}</h1>
                </div>
            </Link>
        </div>
    );
};

OneBrand.propTypes = {
    brand: PropTypes.object.isRequired
}

export default OneBrand;