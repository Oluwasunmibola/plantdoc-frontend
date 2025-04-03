import React from "react";
import Button from "../components/Button"
import { Link } from "react-router-dom"

const footer = () => {
    return (
        <div className="flex flex-col justify-between items-center md:flex-row px-6 ">

            <div className="pt-10">
                &copy; {new Date().getFullYear()} Plantdoc. All rights reserved.
            </div>

            <div>
                <ul className="flex pt-8 gap-10">
                    <li className="hover:text-2xl"><Link to="/">Home</Link></li>
                    <li className="hover:text-2xl"><Link to="/about">About Us</Link></li>
                    <li className="hover:text-2xl"><Link to="/contact">Contact Us</Link></li>
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