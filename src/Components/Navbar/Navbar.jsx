import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


    const navLinks = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/adsf"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : ""
                }
            >
                Abopu
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/dd"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/a"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : ""
                }
            >
                Home
            </NavLink>
        </li>
    </>


    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 flex justify-between items-center">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="flex gap-2 items-center">
                        <img className="w-10 h-10" src="https://i.ibb.co/Drx9h54/logo.png" alt="logo" />
                        <span className="text-cyan-700 font-bold text-3xl">E Tech</span>
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="">

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 border-2 border-[#152475] rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-60"
                            >
                                <li>
                                    <a className="justify-between text-md hover:bg-transparent font-bold text-[#152475]">
                                        {user.displayName}
                                    </a>
                                </li>
                                <li>
                                    <span className="justify-between font-semibold hover:bg-transparent mb-2 text-[#152475]">{user.email}</span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="text-[#152475] text-center hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            {" "}
                            <button onClick={handleSignOut} className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]">Log In</button>{" "}
                        </Link>
                    )}

                </div> */}

                <div>
                    <button> ami </button>
                </div>

            </div>
        </div>
    );
};


export default Navbar;