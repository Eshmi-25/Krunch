import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCourtList = ({ foodCourt, setFoodCourts }) => {
  const nav = useNavigate();
  const handleDelete = async (id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `http://localhost:3000/admin/deleteFC/${id}`,
        {
          headers: {
            token: token,
          },
        }
      );
      // Remove the deleted food court from the state
      setFoodCourts((prevFoodCourts) =>
        prevFoodCourts.filter((foodCourt) => foodCourt._id !== id)
      );
      alert("Food Court deleted successfully, please refresh the page");
    } catch (error) {
      console.error("Error deleting food court:", error);
    }
  };
  return (
    <div className="grid grid-cols-5 mb-2 items-center">
      <div>{foodCourt.fc_no}</div>
      <div>{foodCourt.campus}</div>
      <div>{foodCourt.landmark}</div>
      <div>
        <a
          href={foodCourt.map_link}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Open Map
        </a>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="text-xl text-accentwhite rounded-md px-2 py-2 hover:bg-accentgreen"
          onClick={(e) => {
            e.preventDefault();
            nav(`/editfoodCourt/${foodCourt.fc_no}`);
          }}
        >
          <FaRegEdit />
        </button>

        <button className="text-xl text-tertiary rounded-md px-2 py-2 hover:bg-accentgreen">
          <BiHide />
        </button>
        <button className="text-2xl text-[#FD6062] rounded-md px-2 py-2 ml-2 hover:bg-accentgreen"
        onClick={() => handleDelete(foodCourt.fc_no)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default FoodCourtList;
