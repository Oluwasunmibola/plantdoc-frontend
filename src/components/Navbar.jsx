import React, {useState} from "react";
import LogoImage from "../assets/logo.jpeg"
import Plantbutton from "../components/Button"
import { Link } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {

    const [menuOpen, setMenuOption] = useState(false);
    return (
        <nav className="bg-white px-6 py-4 shadow-md relative z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={LogoImage} alt="Plantdoc logo" className="h-12 w-12 rounded-full" />
                    <h1 className="font-bold text-2xl text-green-900">PlantDoc</h1>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 font-bold text-green-600">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    {/* <Plantbutton buttonName="Login" />
                    <Plantbutton buttonName="SignUp" /> */}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <Plantbutton buttonName="Login" to="/login" />
                    <Plantbutton buttonName="SignUp" to="/signup"/>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOption(!menuOpen)}>
                        {menuOpen ? <FiX className="h-6 w-6 text-green-700" /> : <FiMenu className="h-6 w-6 text-green-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-4 text-center font-semibold text-green-700 flex flex-col items-center">
                    <Link to="/" onClick={() => setMenuOption(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOption(false)}>About Us</Link>
                    <Link to="/contact" onClick={() => setMenuOption(false)}>Contact Us</Link>
                    <Plantbutton buttonName="Login" to="/login"/>
                    <Plantbutton buttonName="SignUp" to="/signup"/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;