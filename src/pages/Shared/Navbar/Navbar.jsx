import { NavLink, Link } from "react-router-dom"
import userDefaultpic from "../../../assets/user.png"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider"
import { signOut, getAuth } from "firebase/auth";
import app from '../../../firebase/firebase.config'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    useEffect(() => {
        Aos.init()
    }, [])

    const handleSignOut = () => {
        const auth = getAuth(app);
        logOut()
            .then()
            .catch()

        signOut(auth)
            .then()
            .catch()

    }


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Booking</NavLink></li>



    </>
    return (
        <div data-aos='fade-down' className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-base md:text-xl">Career Fair</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex justify-evenly items-center">
                        <span>{user.displayName} </span>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <button onClick={handleSignOut} className="btn">Sign out</button>
                    </div>

                        :
                        <div className="flex items-center gap-4">
                            <div className="w-10 rounded-full">
                                <img src={userDefaultpic} />
                            </div>
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                        </div>
                }


            </div>







        </div>
    );
};

export default Navbar;

