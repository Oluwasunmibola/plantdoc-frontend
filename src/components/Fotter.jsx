import React from "react";
import Button from "../components/Button"

const footer = () => {
    return (
        <div className="h-32 flex justify-evenly mt-10">

            <div className="pt-10">
                &copy; {new Date().getFullYear()} Plantdoc. All rights reserved.
            </div>

            <div>
                <ul className="flex flex-col pt-8">
                    <li className="hover:text-2xl"><a href="#home">Home</a></li>
                    <li className="hover:text-2xl"><a href="#about">About Us</a></li>
                    <li className="hover:text-2xl"><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <input type="text" placeholder="Email address" className="mt-10 w-[200px] h-[30px] rounded-md mr-10"/>
                <Button buttonName="Subscribe"/>
            </div>
        </div>
    )
}

export default footer;