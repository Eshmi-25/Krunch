import React from "react";
import ilovekiit from "../assets/ilovekiit.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image Section */}
        <div className="w-1/2 bg-cover">
          <img
            src={ilovekiit}
            alt="I Love KIIT"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-green-50 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-4">
            FOOD COURT LOGIN
          </h2>
          <p className="text-center text-gray-600 mb-6">Login to your account</p>

          <form>
            {/* Form content goes here */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;