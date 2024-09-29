import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const FoodCourtList = ({foodCourt}) => {
  return (
    <div className='grid grid-cols-5 mb-2 items-center'>
        <div>{foodCourt.fc_no}</div>
        <div>{foodCourt.campus}</div>
        <div>{foodCourt.landmark}</div>
        <div>
            <a href={foodCourt.maplink} target="_blank" rel="noreferrer" className='underline'>
            Open Map
            </a>
        </div>
        <div className='flex items-center justify-center'>
            <button className="text-xl text-accentwhite rounded-md px-4 py-2 hover:bg-accentgreen">
            <FaRegEdit />
            </button>
            <button className="text-2xl text-tertiary rounded-md px-4 py-2 ml-2 hover:bg-accentgreen">
            <MdDeleteOutline />
            </button>
        </div>
    </div>
  )
}

export default FoodCourtList