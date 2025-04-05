import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Fotter";
import Button from "../components/Button";
import CameraIcon from "../assets/camera-icon.jpg"


const SignUp = () => {
    return (
        <div className="bg-green-50">
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center mx-6 shadow-lg rounded-md my-20 md:mx-96">
                <div className="text-center text-3xl font-bold text-green-600 my-10 ">
                    <h1>SignUp for PlantDoc</h1>
                </div>

                <form action="" className="flex flex-col gap-6 ">
                    <input type="text" placeholder="Fullname" id="fname" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="email" placeholder="Email"  className="w-[200px] h-10 rounded-lg"/>
                    <input type="password" placeholder="Password" id="password" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="password" placeholder="Confirm Password" id="cpassword" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="Phone Number" id="phone" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="Address" id="address" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="City" id="city" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="State" id="state" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="Country" id="country" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="text" placeholder="Username" id="username" required className="w-[200px] h-10 rounded-lg"/>
                    <input type="file" accept="image/*" className="hidden" id="profilepic" />
                    <label htmlFor="profilepic">
                    <img src={CameraIcon} className="w-10 h-10 cursor-pointer" alt="Upload icon" />
                    <span className="text-sm text-green-700 font-medium">Upload Profile Picture</span>
                    </label>

                </form>
                <div>
                    <Button buttonName="Sign Up"/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;