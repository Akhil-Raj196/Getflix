import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NetflixContent = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center text-white px-4 py-24 sm:py-32 max-w-4xl mx-auto">
      {/* Main Headings */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        Unlimited Movies, TV
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        Shows and More
      </h1>

      {/* Subtext */}
      <h6 className="text-lg sm:text-xl mb-2 sm:mb-4">
        Starts at ₹149. Cancel at any time.
      </h6>
      <h5 className="text-base sm:text-lg mb-6 sm:mb-8">
        Ready to watch? Enter your email to create or restart your membership.
      </h5>

      {/* Email Input + Button */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto flex-1 px-4 py-3 sm:py-4 rounded text-black text-base sm:text-lg focus:outline-none"
        />
        <button
          onClick={handleGetStarted}
          className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NetflixContent;
