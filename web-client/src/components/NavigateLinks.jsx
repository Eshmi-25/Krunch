import React from 'react';
import { useNavigate } from "react-router-dom";

const NavigateLinks = ({navOption, navLink}) => {
    const nav = new useNavigate();

    const handleNavigate = () => {
        nav(navLink);
    }

    const handleLogout = () => {
        nav("/");
    }
  return (
    <div className='cabin pr-10'>
        <ul className='flex gap-5 capitalize text-accentgreen'>
            <li className='cursor-pointer hover:text-secondary' onClick={handleNavigate}>{navOption}</li>
            <li className='cursor-pointer hover:text-secondary' onClick={handleLogout}>Logout</li>
        </ul>
    </div>
  )
}

export default NavigateLinks