import React from "react";
import ilovekiit from "../assets/ilovekiit.png";

const LandingPage = () => {
  return (
    <div className="overflow-hidden items-center bg-gray-100 h-screen w-screen">
      <div className="flex md:flex-row flex-col rounded-lg shadow-lg">

        {/* Left Side - Image Section */}
        <div className="bg-cover">
          <img
            src={ilovekiit}
            alt="I Love KIIT"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-green-50 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-green-700 mb-4">
            FOOD COURT LOGIN
          </h2>
          <p className="text-center text-gray-600 mb-6">Login to your account</p>

          <form>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                KIIT Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="KIIT Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
