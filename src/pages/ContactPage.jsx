import React from "react";
import Navbar from "../components/Navbar"

const contactPage = () => {
    return (
        <div className="bg-green-50">
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen text-green-900 px-6 md:px-20 py-16">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
                <p className="text-lg mb-10 text-center max-w-2xl mx-auto">
                    Got questions, feedback, or need help with your plant? We'd love to hear from you!
                    Fill out the form below and our team will get back to you soon 🌿
                </p>
            

                <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6">
                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="you@email.com"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Message</label>
                        <textarea
                            rows="5"
                            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default contactPage;