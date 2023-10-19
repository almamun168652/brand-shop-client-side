import { BiCrown } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <div className='mb-6'>
        <h1 className='text-center text-4xl font-bold dark:text-gray-200'>About E Tech</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-4 border shadow-lg dark:shadow-md dark:shadow-slate-700">
        <div className="md:w-1/2">
          <h2 className="text-xl text-blue-1 dark:text-gray-300 font-semibold mb-5 border-l-4 border-yellow-1 pl-3">
            Your source for the latest in tech innovation. Shop the future today at E-Tech – where cutting-edge meets convenience.
          </h2>{" "}
          <p className=" text-gray-600 dark:text-white font-medium leading-relaxed mb-5">
            Welcome to E-Tech - Your Gateway to Innovation! Discover and shop the latest and greatest in technology. Explore a curated selection of cutting-edge gadgets, electronics, and tech marvels. From smartphones to smart home devices, we bring you the future today. Stay ahead of the tech curve with us and experience the convenience, entertainment, and productivity that only modern technology can offer. Elevate your digital lifestyle with our handpicked range of products and embrace a smarter, more connected world.
          </p>
          <div>
            <div className="flex gap-4 items-center mb-4">
              <div className="text-yellow-100 text-4xl">
                <BiCrown></BiCrown>
              </div>
              <div>
                <h4 className=" text-blue-1 dark:text-yellow-100 text-lg font-semibold mb-1">
                  Financial Management
                </h4>
              </div>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <div className="text-yellow-100 text-4xl">
                <BsShieldCheck></BsShieldCheck>
              </div>
              <div>
                <h4 className=" text-blue-1 dark:text-yellow-100 text-lg font-semibold mb-1">
                  Customer Relationship Management (CRM)
                </h4>
              </div>
            </div>

          </div>
        </div>
        <img
          className="w-full md:w-1/2 object-cover h-full rounded-md"
          src="https://i.ibb.co/9W17GVV/Business-Technology.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
