import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    AOS.init();

    // Initialize theme based on system preference or localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } else {
            if (prefersDarkScheme) {
                setDarkMode(true);
                document.documentElement.classList.add('dark');
            } else {
                setDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    // Function to toggle dark mode and store the preference in localStorage
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    const navLinkForMobile = <>
        <NavLink className={`text-lg nav-text ${darkMode ? 'text-black' : ''}`} to='/'><li><a>Tasbih</a></li></NavLink>
        <NavLink className={`text-lg nav-text ${darkMode ? 'text-black' : ''}`} to='/jikirs'><li><a>Jikir</a></li></NavLink>
    </>

    const navLinkForBigScreens = <>
        <NavLink className="text-lg nav-text" to='/'><li><a>Tasbih</a></li></NavLink>
        <NavLink className="text-lg nav-text" to='/jikirs'><li><a>Jikir</a></li></NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 nav">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinkForMobile}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Jikir App</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinkForBigScreens}
                    </ul>
                </div>
                <div data-aos="fade-left" className="navbar-end flex gap-4">
                    <input onClick={toggleDarkMode} type="checkbox" className="toggle" checked={darkMode} />
                    <a href="https://www.quran.com" className="btn bg-green-600 text-white" target="_blank" rel="noopener noreferrer">Quran.com</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
