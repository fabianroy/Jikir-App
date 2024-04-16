import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const navLink = <>
        <NavLink className='text-lg' to='/'><li><a>Tasbih</a></li></NavLink>
        <NavLink className='text-lg' to='/jikirs'><li><a>Jikir</a></li></NavLink>
    </>

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    }



    return (
        <div>
            <div className="navbar bg-base-100 nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Jikir App</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <input onClick={toggleDarkMode} type="checkbox" className="toggle" />
                    <a href="https://www.quran.com" className="btn bg-green-600 text-white" target="_blank">Quran.com</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;