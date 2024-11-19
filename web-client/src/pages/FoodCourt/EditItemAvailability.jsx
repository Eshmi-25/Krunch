import React from "react";
import { useState, useEffect } from "react";
import NavigateLinks from "../../components/NavigateLinks";
import { IoMdSearch } from "react-icons/io";
import ItemList from "../../components/ItemList";
import HeadBanner from "../../components/HeadBanner";
import axios from "axios";

const EditItemAvailability = () => {
  const [fcId, setFcId] = useState(1);
  const titles = ["Item ID", "Item Name", "Unit Price", "Available"];
  const [itemList, setItemList] = useState([]);
  const [subtitle, setSubtitle] = useState("Food court: " + fcId);
  
  // Fetch initial item availability data (optional API integration)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:3000/fc/getItemAvailability/${fcId}`, {
          headers: {
            token: token,
          }
        });
        console.log(response.data);
        setItemList(response.data.items || []);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };
    fetchData();
  }, [fcId]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("button clicked");
  };

  const toggleAvailability = async (itemId, isAvailable) => {
    const token = localStorage.getItem("token");
    const endpoint = isAvailable ? "http://localhost:3000/fc/markAvailable" : "http://localhost:3000/fc/markItemUnavailable";
    try {
      const response = await axios.post(
        endpoint,
        { fc_no: fcId, item_id: itemId },
        {
          headers: {
            token: token,
          }
        }
      );
      console.log(
        `Item ${isAvailable ? "marked available" : "marked unavailable"}:`,
        response.data
      );

      // Update the state locally
      setItemList((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, available: isAvailable } : item
        )
      );
    } catch (error) {
      console.error(
        `Error toggling item availability: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <div className="bg-primary max-h-screen min-w-screen flex flex-col p-10 overflow-hidden">
      {/* Fixed Top Header */}
      <div className="flex justify-between mb-2">
        <HeadBanner title="Edit Item Availability" subtitle={subtitle} />
        <NavigateLinks navOption="view orders" navLink="/vieworders" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <form
          onSubmit={handleSearch}
          className="w-full flex items-center justify-center gap-2"
        >
          <input
            type="text"
            className="w-1/2 px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
            placeholder="Search for items"
          />
          <button type="submit">
            <IoMdSearch className="text-5xl hover:bg-secondary hover:text-accentwhite rounded-full p-2 text-accentgreen" />
          </button>
        </form>
      </div>

      {/* Scrollable Item List Container */}
      <div className="px-10 flex-1 mb-2">
        <div className="mt-2 bg-secondary cabin text-accentwhite rounded-md py-5 overflow-hidden max-h-full ">
          {/* Titles */}
          <div className="grid grid-cols-4">
            {titles.map((title, idx) => (
              <div key={idx} className="p-2 text-center">
                {title}
              </div>
            ))}
          </div>

          <div className="px-5">
            <div className="bg-accentwhite w-full h-1 mt-1 rounded-md"></div>
          </div>

          {/* Scrollable Item List */}
          <div className="h-64 overflow-y-auto">
            {itemList.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center p-2 border-b border-gray-300"
              >
                <div className="text-center">{item.id}</div>
                <div className="text-center">{item.name}</div>
                <div className="text-center">{item.unitPrice}</div>
                <div className="text-center">
                  <input
                    type="checkbox"
                    checked={item.available}
                    onChange={() => toggleAvailability(item.id, !item.available)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemAvailability;

//   const markAvailable = async (item_id) => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         "/markAvailable",
//         { fc_no: fcId, item_id },
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );
//       console.log("Item marked as available:", response.data);
//       // Update the state to reflect the change
//       setItemList((prevItemList) =>
//         prevItemList.map((item) =>
//           item._id === item_id ? { ...item, available: true } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error marking item as available:", error);
//     }
//   };

//   const markItemUnavailable = async (item_id) => {
//     const token = localStorage.getItem("token");
//     try {
//       const response = await axios.post(
//         "/markItemUnavailable",
//         { fc_no: fcId, item_id },
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );
//       console.log("Item marked as unavailable:", response.data);
//       // Update the state to reflect the change
//       setItemList((prevItemList) =>
//         prevItemList.map((item) =>
//           item._id === item_id ? { ...item, available: false } : item
//         )
//       );
//     } catch (error) {
//       console.error("Error marking item as unavailable:", error);
//     }
//   };
//   return (
//     <div className="bg-primary max-h-screen min-w-screen flex flex-col p-10 overflow-hidden">
//       {/* Fixed Top Header */}
//       <div className="flex justify-between mb-2">
//         <HeadBanner title="Edit Item Availability" subtitle={subtitle} />
//         <NavigateLinks navOption="view orders" navLink="/vieworders" />
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center justify-center gap-2 mb-4">
//         <form
//           onSubmit={handleSearch}
//           className="w-full flex items-center justify-center gap-2"
//         >
//           <input
//             type="text"
//             className="w-1/2 px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
//             placeholder="Search for items"
//           />
//           <button type="submit">
//             <IoMdSearch className="text-5xl hover:bg-secondary hover:text-accentwhite rounded-full p-2 text-accentgreen" />
//           </button>
//         </form>
//       </div>

//       {/* Item List */}
//       <div className="px-10 flex-1 mb-2">
//         <div className="mt-2 bg-secondary cabin text-accentwhite rounded-md py-5 overflow-hidden max-h-full">
//           {/* Titles */}
//           <div className="grid grid-cols-4">
//             {titles.map((title, idx) => (
//               <div key={idx} className="p-2 text-center">
//                 {title}
//               </div>
//             ))}
//           </div>

//           <div className="px-5">
//             <div className="bg-accentwhite w-full h-1 mt-1 rounded-md"></div>
//           </div>

//           {/* Scrollable Item List */}
//           <div className="h-64 overflow-y-auto">
//             {itemList.map((item) => (
//               <ItemList
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 unitPrice={item.unitPrice}
//                 available={item.available}
//                 markAvailable={() => markAvailable(item.id)}
//                 markUnavailable={() => markItemUnavailable(item.id)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditItemAvailability;
