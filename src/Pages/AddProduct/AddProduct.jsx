

const AddProduct = () => {
    return (

        <div className="max-w-screen-xl px-4 mx-auto">
            <div className="bg-[#F4F3F0] p-3 md:p-20 my-6 mx-2">
                <h2 className="text-3xl font-extrabold text-center text-[#E76D66]">
                    Add Product
                </h2>
                <form>
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
                        <div className="form-control md:w-1/2 mx-2">
                            <label className="label ">
                                <span className="label-text text-lg text-black">Rating</span>
                            </label>
                            <label className="">
                                <input
                                    type="text"
                                    name="rating"
                                    placeholder="Rating"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="text-center">
                        <input
                            type="submit"
                            value="Add Product"
                            className="bg-[#E76D66] text-white w-1/2 m-2 rounded-lg py-3 px-4 my-5 text-xl font-semibold"
                        />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddProduct;