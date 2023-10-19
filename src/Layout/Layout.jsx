import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";


const Layout = () => {

    const [theme , setTheme] = useState(null);


    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    } , [])


    useEffect(()=>{
       if(theme === "dark"){
        document.documentElement.classList.add("dark");
       }else{
        document.documentElement.classList.remove("dark");
       }
    }, [theme])

    const handleThemeSwich = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="dark  bg-white dark:bg-black">

            <button onClick={handleThemeSwich} className="bg-green-600 text-white">dark</button>

            <header className="border-b">
                {/* navbar */}
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                {/* footer */}
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Layout;

