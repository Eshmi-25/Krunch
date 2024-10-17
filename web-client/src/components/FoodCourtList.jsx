import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BiHide } from "react-icons/bi";

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
        <a href={`/editfoodCourt/${foodCourt.fc_no}`}>
          <button className="text-xl text-accentwhite rounded-md px-2 py-2 hover:bg-accentgreen">
            <FaRegEdit />
          </button>
        </a>

            <button className="text-xl text-tertiary rounded-md px-2 py-2 hover:bg-accentgreen">
            <BiHide />
            </button>
            <button className="text-2xl text-[#FD6062] rounded-md px-2 py-2 ml-2 hover:bg-accentgreen">
            <MdDeleteOutline />
            </button>
        </div>
    </div>
  )
}

export default FoodCourtList