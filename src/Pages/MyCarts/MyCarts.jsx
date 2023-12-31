import { useContext, useEffect, useState } from "react";
import CartCard from "../../Components/CartCard/CartCard";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const MyCarts = () => {

    const [brandCarts, setBrandCarts] = useState([]);
    const [filterCarts, setFilterCarts] = useState([]);

    const { user } = useContext(AuthContext);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/carts')
    //         .then(res => res.json())
    //         .then(data => setBrandCarts(data))
    // }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/carts',{
            withCredentials: true,
        }).then(res => {
                setBrandCarts(res.data);
            })
    }, [])

    useEffect(() => {
        const currentCarts = brandCarts.filter(oneCard => oneCard.email == user.email)
        setFilterCarts(currentCarts);
    }, [brandCarts, user.email])

    return (
        <div className="max-w-screen-xl p-4 mx-auto">
            <div className='mb-6'>
                {
                    filterCarts.length > 0 ?
                        <h1 className='text-center text-4xl dark:text-white font-bold'>All Carts Here</h1> :
                        <h1 className='text-center text-4xl dark:text-white my-40 font-bold'>No Carts Here</h1>
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    filterCarts.map(cart => <CartCard brandCarts={brandCarts} setBrandCarts={setBrandCarts} key={cart._id} cart={cart}></CartCard>)
                }
            </div>


        </div>
    );
};

export default MyCarts;