import React from 'react';
import { useNavigate } from "react-router-dom";

const AdminNavigateLinks = ({navOption1, navLink1, navOption2, navLink2}) => {
    const nav = new useNavigate();

    const handleNavigate1 = () => {
        nav(navLink1);
    }

    const handleNavigate2 = () => {
        nav(navLink2);
    }

    const handleLogout = () => {
        nav("/");
    }
  return (
    <div className='cabin pr-10'>
        <ul className='flex gap-5 capitalize text-accentgreen'>
            <li className='cursor-pointer hover:text-secondary' onClick={handleNavigate1}>{navOption1}</li>
            <li className='cursor-pointer hover:text-secondary' onClick={handleNavigate2}>{navOption2}</li>
            <li className='cursor-pointer hover:text-secondary' onClick={handleLogout}>Logout</li>
        </ul>
    </div>
  )
}

export default AdminNavigateLinks