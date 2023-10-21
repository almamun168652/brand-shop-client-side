import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import swal from "sweetalert";
import Rating from "react-rating";

const Details = () => {

    const detailsProduct = useLoaderData();


    const { image, name, brand, type, price, rating, description } = detailsProduct || {}

    const handleAddCart = async (detailsProduct) => {

        try {
            const response = await fetch("https://brand-shop-server-9hdb4ek57-almamun168652-gmailcom.vercel.app/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(detailsProduct),
            });
            const result = await response.json();
            console.log(result);

            if (result.acknowledged) {
                swal("Added!", "Add To Cart Successfully", "success");
            }

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="max-w-screen-lg mx-auto px-4 my-10">
            <div className="p-4 shadow-xl border rounded-lg">
                <img className="w-full max-h-[500px] object-cover rounded-lg" src={image} alt="" />
                <h1 className="text-2xl md:text-4xl font-bold my-4">{name}</h1>
                <div className="flex justify-between text-lg md:text-xl font-semibold text-sky-800">
                    <h1>Brand: {brand}</h1>
                    <h1>Price: {price} $</h1>
                </div>
                <div className="my-2">
                    <div className="block font-sans text-xl font-normal leading-normal text-yellow-500 antialiased">
                        <Rating
                            initialRating={rating}
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            readonly />
                    </div>
                </div>
                <h1 className="text-lg font-semibold my-1">{type}</h1>
                <h1 className="text-gray-500 my-1">{description}</h1>

                <div className="flex justify-end mt-4 mb-1">
                    <div onClick={() => handleAddCart(detailsProduct)}>
                        <button className="bg-sky-600 hover:bg-white text-white hover:text-sky-700 text-lg font-semibold border-2 flex gap-2 items-center px-4 py-1 rounded border-sky-600"><AiOutlineShoppingCart /> Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;