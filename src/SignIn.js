import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./Firebaseconfig";
import { background } from "./utils";
import NetflixLogo from "./images/NetflixLogo";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // update Firebase profile with display name
        await updateProfile(userCredential.user, {
          displayName: `${firstName} ${lastName}`,
        });

        setSuccess("✔ Account created successfully!");
        navigate("/");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/movies");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Navbar */}
      <Navbar />

      <div className="relative z-10 flex flex-1 justify-center items-start mt-16 sm:mt-24 px-4">
        <div className="bg-black bg-opacity-80 p-6 sm:p-10 rounded-lg w-full max-w-md text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={handleAuth} className="space-y-4">
            {/* Show only in Sign Up */}
            {isSignUp && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 sm:p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-base sm:text-lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 sm:p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-base sm:text-lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 sm:p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-base sm:text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 sm:p-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-base sm:text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-red-600 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 text-base sm:text-lg"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {success && (
            <p className="text-green-500 mt-4 text-center font-semibold">
              {success}
            </p>
          )}

          <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <button className="hover:underline text-sm">
              {isSignUp ? "" : "Forgot password?"}</button>
          </div>

          <p className="mt-6 text-gray-400 text-center text-sm">
            {isSignUp ? (
              <>
                Already a member?{" "}
                <button
                  className="text-white hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign in now
                </button>
              </>
            ) : (
              <>
                New to Netflix?{" "}
                <button
                  className="text-white hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign up now
                </button>
              </>
            )}
          </p>

          <p className="text-xs text-gray-400 mt-6 text-center">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.{" "}
            <a
              href="https://www.google.com/recaptcha/about/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Learn more.
            </a>
          </p>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
