import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import axios from "axios";

const Login = () => {

    const [err, setErr] = useState('');
    const [isShow, setIsShow] = useState(false)

    const { googleLogin, logInUser, } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {

        googleLogin()
            .then(res => {
                const jwtEmail = res.user.email;
                console.log(res);
                swal("Good job!", "Request Successfully!", "success");
                navigate(location.state ? location.state : '/');

                axios.post('http://localhost:5000/jwt', jwtEmail, {
                    withCredentials: true,
                })
                    .then(res => {
                        console.log(res.data);
                    })

            })
            .catch(err => {
                setErr(err.code);
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErr('');

        logInUser(email, password)
            .then(res => {
                console.log(res.user.email);
                const jwtEmail = res.user.email;
                swal("Good job!", "Login Successfully!", "success");
                navigate(location.state ? location.state : '/');

                axios.post('http://localhost:5000/jwt', jwtEmail, {
                    withCredentials: true,
                })
                    .then(res => {
                        console.log(res.data);
                    })
            })
            .catch(err => {
                setErr(err.code);
            });

        e.target.email.value = '';
        e.target.password.value = '';

    }

    return (
        <div>
            <div className="flex justify-center my-20">
                <div className="relative flex flex-col p-4 shadow-md border rounded-lg bg-transparent bg-clip-border text-gray-700">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-sky-700 antialiased">
                        Sign In
                    </h4>
                    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Enter your details to Sign In.
                    </p>
                    {err ? <p className="text-red-600 max-w-[400px] text-sm text-center relative -bottom-4">{err}</p> : ''}
                    <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input type="email" name="email"
                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="flex items-center">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        type={isShow ? "password" : "text"} name="password"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-sky-700focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-sky-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                                <span onClick={() => setIsShow(!isShow)} className="absolute right-6 cursor-default">{isShow ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                        </div>
                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-sky-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-[#152475]/20 transition-all hover:shadow-lg hover:shadow-sky-700/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Are you new? please<Link className="font-semibold text-sky-700" to='/register'> Sign Up</Link>
                        </p>
                        <button onClick={handleGoogleLogin} className="flex gap-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img className="w-5" src="https://i.ibb.co/bQWtMgX/Google-G-Logo-svg-1-removebg-preview.png" alt="" />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;