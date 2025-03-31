import React from "react";
import LogoImage from "../assets/logo.jpeg"
import Plantbutton from "../components/Button"

const navbar = () => {
    return (
        <nav className="h-[10.5vh] flex justify-between mt-5 mx-7">
            {/* Adding logo */}
            <div className="flex gap-10">
                <img src={LogoImage} alt="plantdoc logo" className="h-[10vh] rounded-full"/>
                <h1 className="font-bold text-4xl text-green-900 pt-5">PlantDoc</h1>
            </div>

            {/* Adding navigation list items */}
            <ul className="flex pt-8 gap-10">
                <li className="text-green-600 hover:text-2xl font-bold"><a href="#home">Home</a></li>
                <li className="text-green-600 hover:text-2xl font-bold"><a href="#about">About Us</a></li>
                <li className="text-green-600 hover:text-2xl font-bold"><a href="#contact">Contact Us</a></li>
            </ul>

            {/* Adding login and signup buttons */}
            <div className="mr-10 flex gap-10">
                <Plantbutton buttonName="Login"/>
                <Plantbutton buttonName="SignUp"/>
            </div>
                
        </nav>
    );
};

export default navbar;