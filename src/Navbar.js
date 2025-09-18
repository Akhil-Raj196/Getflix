import React, { useState, useEffect } from "react";
import { auth } from "./Firebaseconfig";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "./images/NetflixLogo";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 sm:px-12 py-4 sm:py-6 absolute top-0 z-20">
      {/* Logo */}
      <div className="w-28 sm:w-32">
        <NetflixLogo />
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3 sm:space-x-6">
        {/* Show avatar + displayName (desktop only) */}
        {user?.displayName && (
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
              {user.displayName.charAt(0).toUpperCase()}
            </div>
            <span className="text-white font-medium">{user.displayName}</span>
          </div>
        )}

        {/* Language Dropdown (hidden on mobile) */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden sm:block px-3 py-1 sm:px-4 sm:py-2 bg-black bg-opacity-70 border border-gray-500 text-white rounded text-sm sm:text-base focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base transition-colors duration-200"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base transition-colors duration-200"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
