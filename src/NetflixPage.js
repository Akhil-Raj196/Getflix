import React, { useState } from "react";
import { background } from "./utils";
import NetflixLogo from "./images/NetflixLogo";
import { useNavigate } from "react-router-dom";
import NetflixContent from "./NetflixContent";
import NetflixAccordion from "./NetflixAccordion";
import Footer from "./Footer";

const NetflixPage = () => {
    const [language, setLanguage] = useState("English");
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin");
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white backdrop-blur-md flex flex-col"
            style={{ backgroundImage: `url(${background})` }}
        >
            <nav className="w-full flex items-center justify-between px-6 sm:px-12 py-4 sm:py-6 backdrop-blur-md absolute top-0 z-20">
                <div className="w-28 sm:w-32">
                    <NetflixLogo />
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="hidden sm:block px-3 py-1 sm:px-4 sm:py-2 bg-black bg-opacity-70 border border-gray-500 text-white rounded text-sm sm:text-base focus:outline-none"
                    >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>

                    <button
                        onClick={handleSignIn}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base transition-colors duration-200"
                    >
                        Sign In
                    </button>
                </div>
            </nav>


            <main className="flex-1 flex flex-col items-center justify-center mt-20">
                <NetflixContent />
                <div className="w-full px-4 sm:px-8 mt-12">
                    <NetflixAccordion />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NetflixPage;
