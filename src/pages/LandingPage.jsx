import React from "react";
// import LogoImage from "../assets/logo.jpeg"
import ImageSlider from "../components/ImageSlider"
import Plantbutton from "../components/Button"
import PlantSpecie from "../assets/plantspecie.png"
import Dpd from "../assets/Detect Plant Diseases.png"
import Feature from "../components/Features"
import Treatment from "../assets/treatment.png"
import Upload from "../assets/upload.png"
import Footer from "../components/Fotter"
import Navbar from "../components/Navbar"


const LandingPage = () => {
    return (
        <div>
            {/* create the navigation bar */}
            <Navbar />

            {/* Hero Section */}
            <div className="my-5 h-[80vh] mt-10 flex mx-10">
                <div className="h-[80vh] w-[50%] mr-20">
                    <ImageSlider/>
                </div>

                <div>
                    <h2 className="font-bold text-5xl mt-[40%] text-green-600 mb-5">AI-Powered Plant Disease Detection</h2>
                    <p className="mt-0 font-light text-black"><i>Snap a photo, get answers. Whether you’re a farmer or a plant lover, 
                    Plantdoc helps you diagnose plant issues in seconds.</i></p>
                    <div className="flex justify-center gap-20">
                        <Plantbutton buttonName="Get Started"/>
                        <Plantbutton buttonName="Learn More"/>
                    </div>
                </div>  
            </div>

            {/* Features Section */}
            <div className="h-[1050px]">
                <h2 className="text-5xl font-bold text-center my-20 text-green-600">Features</h2>
                <Feature image={PlantSpecie} title="Identify Plant Species" 
                description="Not sure what kind of plant you’re dealing with? Simply upload a photo, 
                            and Plantdoc’s AI will instantly recognize the species. 
                            Whether it’s a tomato plant, maize, or a houseplant, 
                            we’ll help you identify it in seconds — no guesswork, just accurate results."/>

                <Feature image={Dpd} title="Detect Plant Diseases" 
                description="Catch plant problems early with Plantdoc’s intelligent disease detection.
                 Just upload a photo of your plant, and our AI will scan for signs of infection — 
                 from leaf spots to discoloration and more. Get fast, reliable diagnosis to help protect 
                 your crops and keep your plants thriving." reverse/>

                <Feature image={Treatment} title="Recommend Solutions Instantly" 
                description="After detecting a disease, Plantdoc goes a step further by offering clear, 
                actionable treatment options. Whether it’s natural remedies or product recommendations, 
                you’ll get expert-backed tips tailored to your plant’s condition — 
                so you can take care of the problem fast and effectively."/>

                <Feature image={Upload} title=" Upload via Camera or Gallery" 
                description="Easily snap a photo of your plant or upload one from your gallery. 
                Plantdoc is designed to be simple and intuitive — no complicated steps, just tap, upload,
                 and get instant insights into your plant’s health." reverse/>
                
            </div>

            {/* Footer */}
           <Footer />
        </div>
    );
};

export default LandingPage;