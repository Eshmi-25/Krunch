import './App.css'
import LandingPage from './pages/LandingPage'
import ViewOrders from './pages/FoodCourt/ViewOrders'
import EditItemAvailability from './pages/FoodCourt/EditItemAvailability'
import ViewFoodCourts from './pages/Admin/ViewFoodCourts'
import FoodCourtOrders from './pages/Admin/FoodCourtOrders'
import AddNewFoodCourt from './pages/Admin/AddNewFoodCourt'
import AddNewItem from './pages/Admin/AddNewItem'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import EditFoodCourt from './pages/Admin/EditFoodCourt'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      } else {
        const tokenData = jwtDecode(token);
        if (tokenData.usertype === "admin") {
          navigate('/viewFoodCourts');
        } else if (tokenData.usertype === "foodcourt") {
          navigate('/viewOrders');
        } else {
          localStorage.removeItem('token');
        }
      }
    };
    getToken();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/viewOrders' element={<ViewOrders />} />
      <Route path='/editItemAvailability' element={<EditItemAvailability />} />
      <Route path='/viewFoodCourts' element={<ViewFoodCourts />} />
      <Route path='/foodCourtOrders/:id' element={<FoodCourtOrders />} />
      <Route path='/addNewFoodCourt' element={<AddNewFoodCourt />} />
      <Route path='/addNewItem' element={<AddNewItem />} />
      <Route path='/editfoodCourt/:id' element={<EditFoodCourt />} />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
