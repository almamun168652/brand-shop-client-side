import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-sky-700 mb-4">Page Not Found</h1>
                <img className="mx-auto w-3/4 md:w-1/3" src="https://i.ibb.co/9rWvL6N/404.jpg" alt="" />

                <Link to='/'>
                    <p className="text-white inline-block bg-sky-700 hover:bg-white hover:text-sky-700 transition-all border hover:border-sky-700 px-6 py-2">GO HOME</p>
                </Link>

            </div>
        </div>
    );
};

export default Error;