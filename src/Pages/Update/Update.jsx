
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {


    const singleBrand = useLoaderData();

    const { _id, image, name, type, price, description, rating, brand } = singleBrand || {}

    const [optionBrand, setOptionBrand] = useState(brand);


    const handleSelectChange = async (event) => {
        setOptionBrand(event.target.value);
    };

    const hanldeUpdate = async (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updatedProduct = {
            name,
            price,
            type,
            description,
            rating,
            image,
            optionBrand
        };


        try {
            const response = await fetch(`https://brand-shop-server-etvnzft76-almamun168652-gmailcom.vercel.app/products/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });
            const result = await response.json();
            console.log(result);

            if (result.acknowledged) {
                swal("Updated!", "Product Updated Successfully", "success");
            }

        } catch (error) {
            console.log(error);
        }


    }



    return (
        <div className="max-w-screen-xl px-4 mx-auto">
            <div className="border shadow-xl rounded-md p-4 my-6">
                <h2 className="text-3xl font-bold text-center text-sky-700">
                    Update Product
                </h2>
                <form onSubmit={hanldeUpdate}>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black">Image</span>
                            </label>
                            <label className="">
                                <input
                                    defaultValue={image}
                                    type="text"
                                    name="image"
                                    placeholder="Image URL"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label">
                                <span className="label-text text-lg text-black">Name</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    defaultValue={name}
                                    name="name"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* ---- */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label">
                                <span className="label-text text-lg text-black">Type</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    defaultValue={type}
                                    name="type"
                                    placeholder="Product Type"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black">Price</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    defaultValue={price}
                                    name="price"
                                    placeholder="Product Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* ---- */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black ">Brand Name</span>
                            </label>
                            <select className="input input-bordered w-full" value={optionBrand} onChange={handleSelectChange}>
                                <option>Choose Your Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Sony">Sony</option>
                                <option value="Lg">Lg</option>
                                <option value="Panasonic">Panasonic</option>
                            </select>
                        </div>

                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black">Rating</span>
                            </label>
                            <label className="">
                                <input
                                    type="number"
                                    defaultValue={rating}
                                    name="rating"
                                    placeholder="Rating"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full mx-2 pr-4">
                        <label className="label">
                            <span className="label-text text-lg text-black">
                                Short description
                            </span>
                        </label>
                        <label className="">
                            <input
                                type="text"
                                defaultValue={description}
                                name="description"
                                placeholder="Short Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    <div className="text-center">
                        <input
                            type="submit"
                            value="Update Product"
                            className="bg-sky-700 hover:bg-sky-800 text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;