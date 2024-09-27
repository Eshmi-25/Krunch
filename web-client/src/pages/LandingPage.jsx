import React from "react";
import ilovekiit from "../assets/ilovekiit.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = new useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    nav("/viewOrders")
  }
  return (
    <div className="overflow-hidden items-center justify-between h-screen w-screen flex md:flex-row flex-col">
        {/* Left Side - Image Section */}
        <div className="w-2/3 h-screen">
          <img
            src={ilovekiit}
            alt="I Love KIIT"
            className=" object-cover h-full w-full"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="p-20 w-1/3 h-screen flex flex-col justify-center bg-primary">
          <h2 className="text-5xl font-thin text-center text-accentgreen mb-4">
            LOGIN
          </h2>
          <p className="text-center text-accentgreen mb-6 text-xl">Login to your account</p>

          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="KIIT Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-accentgreen text-accentwhite font-thin py-2 px-4 rounded-2xl text-xl shadow-md hover:text-tertiary"
            >
              Login
            </button>
          </form>
        </div>
    </div>
  );
};

export default LandingPage;
