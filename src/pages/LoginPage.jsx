import React from "react";
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Fotter"

// flex flex-col items-center justify-center w-screen md:h-[70vh] my-32 mx-[40rem] rounded-lg shadow-lg gap-5
const LoginPage = () => {
    return (
        <div className="bg-green-50">
            <Navbar />

            <div className="min-h-screen flex flex-col justify-center items-center my-6 mx-20">
                <div className="text-center font-bold text-green-600 text-2xl mb-10 md:w-1/2 flex items-center justify-center">
                    <h1 className="text-center">Welcome to PlantDoc</h1>
                </div>

                <div className= "flex items-center justify-center flex-col gap-5  md:w-1/2">
                    <input type="text" placeholder="Enter email" className="h-10 w-[200px] rounded-lg"/> <br />
                    <input type="text" placeholder="Enter Password" className="h-10 w-[200px] rounded-lg"/>
                    <Button buttonName="Login" /> <br />
                    <p className="text-center">Don't have an account? <a href="/signup" className="text-green-600 font-bold">Sign Up</a></p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
            
           
        </div>

    );
};

export default LoginPage;