import React, { useState, useEffect } from "react";
import HeadBanner from "../../components/HeadBanner";
import AdminNavigateLinks from "../../components/AdminNavigateLinks";
import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import axios from "axios";

const EditFoodCourt = () => {
    const [adminName, setAdminName] = useState("Admin");
    const [subtitle, setSubtitle] = useState("Mr/Ms/Mrs. " + adminName);
    const { id } = useParams();
    const [fcLandmark, setLandmark] = useState("");
    const [fcCampus, setCampus] = useState("");
    const [fcMapLink, setMapLink] = useState("");
    console.log(id)

    useEffect(() => {
      const fetchFoodCourtDetails = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`http://localhost:3000/admin/editFC/${id}`, {
            headers: {
              token: token,
            },
          });
          const { landmark, campus, mapLink } = response.data;
          setLandmark(landmark);
          setCampus(campus);
          setMapLink(mapLink);
        } catch (error) {
          console.error("Error fetching food court details:", error);
        }
      };
  
      fetchFoodCourtDetails();
    }, [id]);

    const handleSubmit = async (e) => {
      const token = localStorage.getItem("token");
      e.preventDefault();
      try {
        const response = await axios.put(
          `http://localhost:3000/admin/editFC/${id}`,
          {
            landmark: fcLandmark,
            campus: fcCampus,
            map_Link: fcMapLink,
          },
          {
            headers: {
              token: token,
            },
          }
        );
        alert(
          `Edited Successfully`
        );
        setCampus("");
        setMapLink("");
        setLandmark("");
        // Optionally, redirect or show a success message
      } catch (error) {
        console.error("Error updating food court:", error);
      }
    };

    return (
      <div className="bg-primary min-h-screen min-w-screen flex flex-col p-10">
        <div className="flex justify-between">
          <HeadBanner title={`Food Court no ${id}`} subtitle={subtitle} />
          <AdminNavigateLinks
            navOption1="View All FCs"
            navLink1="/viewFoodCourts"
            navLink2="/addNewItem"
          />
        </div>
        <form onSubmit = {handleSubmit} action="" className="flex justify-center">
        <div className="bg-secondary text-accentwhite  w-1/3 cabin mt-6 rounded-md py-5 px-10 ">
          <div className="grid grid-rows-3 gap-4 mt-5">
            <div>
              <label htmlFor="ca_no">Campus</label>
              <input required
                type="text"
                name="ca_no"
                id="fcCampus"
                value={fcCampus}
                onChange={(e) => setCampus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            
            <div>
              <label htmlFor="land_mark">Landmark</label>
              <input required
                type="text"
                name="land_mark"
                id="fcLandmark"
                value={fcLandmark}
                onChange={(e) => setLandmark(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
            <div>
              <label htmlFor="map_link">Map Link</label>
              <input required
                type="text"
                name="map_link"
                id="fcMapLink"
                value={fcMapLink}
                onChange={(e) => setMapLink(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
              />
            </div>
          </div>
          <div className="px-5 mt-10">
            <div className="bg-accentwhite w-full h-1 mt-4 rounded-md"></div>
          </div>
          <div className="mt-5 mb-5 text-center flex items-center justify-center gap-5">
            <button className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md">
              <div className="flex items-center gap-2">
                <IoMdAdd />
                Add
              </div>
            </button>
            <button 
            type="reset"
            className="bg-tertiary text-accentgreen shadow-md hover:bg-accentgreen hover:text-accentwhite p-2 rounded-md"
            onClick={() => {
              setLandmark("");
              setCampus("");
              setMapLink("");
            }}
          >
            
            <div className="flex items-center gap-2">
                <GrPowerReset />
                Reset
              </div>
            </button>
          </div>
        </div>
        </form>
      </div>
    );
}

export default EditFoodCourt;
