

const Banner = () => {
    return (
        <div className="max-w-screen-xl px-4 mx-auto my-10">
            <div className="bg-[url(https://i.ibb.co/qYcv1rs/banner.jpg)] bg-no-repeat bg-cover bg-center">
                <section className="dark:bg-[#152e3da1] bg-[#000000e1] flex items-center min-h-[80vh]">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">Tech Innovations: Shaping Tomorrow, Today</h1>
                        <p className="my-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">Explore the Latest Gadgets and Gizmos at Our Tech Store – Where Innovation Meets Convenience!</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                            <a href="#" className="flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 text-white dark:focus:ring-gray-800">
                                Learn More
                            </a>

                            <a href="#" className="flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 text-white dark:focus:ring-gray-800">
                                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                Watch video
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;