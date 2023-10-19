import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCarts from "../Pages/MyCarts/MyCarts";
import PrivateRoute from "./PrivateRoute";
import BrandGallery from "../Components/BrandGallery/BrandGallery";
import Update from "../Pages/Update/Update";
import Details from "../Pages/Details/Details";

const createdRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/brand.json'),
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=> fetch(`https://brand-shop-server-ivtiu0s4h-almamun168652-gmailcom.vercel.app/products/${params.id}`) 
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params})=> fetch(`https://brand-shop-server-ivtiu0s4h-almamun168652-gmailcom.vercel.app/products/${params.id}`) 
            },
            {
                path: '/myCarts',
                element: <PrivateRoute><MyCarts></MyCarts></PrivateRoute>,
                // loader: ()=> fetch(`https://brand-shop-server-ivtiu0s4h-almamun168652-gmailcom.vercel.app/carts`)
            },
            {
                path: '/brand/:brand_name',
                element: <PrivateRoute><BrandGallery></BrandGallery></PrivateRoute>,
                loader: ()=> fetch('/brand.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default createdRoute;