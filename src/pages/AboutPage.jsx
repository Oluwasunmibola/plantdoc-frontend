import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Fotter"

const AboutPage = () => {
    return (

        <div className=" bg-green-50">
            <div>
                <Navbar />
            </div>

            <div className="min-h-screen text-green-900 px-6 md:px-20 py-16">
                <h1 className="text-4xl font-bold mb-6 text-center">About PlantDoc</h1>
                <p className="text-lg mb-6 max-w-3xl mx-auto text-center">
                    Plantdoc is an AI-powered platform designed to help farmers, gardeners,
                    and plant lovers diagnose plant diseases and get expert solutions —
                    simply by uploading a photo. We combine the power of machine learning
                    with the simplicity of mobile technology to make plant health accessible
                    for everyone.
                </p>

                <div className="max-w-4xl mx-auto mt-10">
                    <h2 className="text-2xl font-semibold mb-3 text-center">🌍 Our Mission</h2>
                    <p className="text-md text-gray-700 mb-6 text-center">
                        At Plantdoc, our mission is to empower people to protect and nurture
                        their plants by making plant health diagnosis fast, easy, and
                        accurate. We believe that healthy plants mean healthy lives, stronger
                        food systems, and a greener planet.
                    </p>

                    <h2 className="text-2xl font-semibold mb-3 text-center">💡 Why We Built This</h2>
                    <p className="text-md text-gray-700 mb-6 text-center">
                        Many people struggle to identify plant issues before it’s too late.
                        We built Plantdoc to bridge that gap using computer vision and smart
                        recommendations. Whether you're growing tomatoes on a farm or caring
                        for a houseplant on your windowsill, we’ve got your back.
                    </p>
                </div>

                <Footer />
            </div>
        </div>
        
    )
}

export default AboutPage;