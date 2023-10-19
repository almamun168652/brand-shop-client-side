import { useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/CartCard";


const MyCarts = () => {

    const [brandCarts, setBrandCarts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setBrandCarts(data));

    }, [])



    return (
        <div className="max-w-screen-xl p-4 mx-auto">
            <div className='mb-6'>
                {
                    brandCarts.length > 0 ?
                    <h1 className='text-center text-4xl font-bold'>All Carts Here</h1> :
                    <h1 className='text-center text-4xl my-40 font-bold'>No Carts Here</h1>
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    brandCarts.map(cart => <CartCard brandCarts={brandCarts}  setBrandCarts={setBrandCarts} key={cart._id} cart={cart}></CartCard>)
                }
            </div>


        </div>
    );
};

export default MyCarts;