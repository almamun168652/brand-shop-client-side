import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Layout = () => {




    return (
        <div className=" bg-white dark:bg-black">

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

