import { useState } from "react";
import swal from "sweetalert";





const AddProduct = () => {

    const [brand, setBrand] = useState('');

    const handleSelectChange = (event) => {
        setBrand(event.target.value);
    };


    const handleAddProduct = async (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = {
            name,
            price,
            type,
            description,
            rating,
            image,
            brand
        };

        try {
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            const result = await response.json();
            console.log(result);

            if (result.acknowledged) {
                swal("Done!", "Product Added Successfully", "success");
            }

        } catch (error) {
            console.log(error);
        }

        form.reset('');

    };


    return (
        <div className="max-w-screen-xl px-4 mx-auto">
            <div className="border shadow-xl rounded-md p-4 my-6">
                <h2 className="text-3xl font-bold text-center text-sky-700">
                    Add Product
                </h2>
                <form onSubmit={handleAddProduct}>
                    <div className="md:flex">
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black">Image</span>
                            </label>
                            <label className="">
                                <input
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
                            <select className="input input-bordered w-full" value={brand} onChange={handleSelectChange}>
                                <option selected>Choose Your Brand</option>
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
                                name="description"
                                placeholder="Short Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    <div className="text-center">
                        <input
                            type="submit"
                            value="Add Product"
                            className="bg-sky-700 hover:bg-sky-800 text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;


