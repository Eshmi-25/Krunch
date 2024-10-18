import './App.css'
import LandingPage from './pages/LandingPage'
import ViewOrders from './pages/FoodCourt/ViewOrders'
import EditItemAvailability from './pages/FoodCourt/EditItemAvailability'
import ViewFoodCourts from './pages/Admin/ViewFoodCourts'
import FoodCourtOrders from './pages/Admin/FoodCourtOrders'
import AddNewFoodCourt from './pages/Admin/AddNewFoodCourt'
import AddNewItem from './pages/Admin/AddNewItem'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'

import EditFoodCourt from './pages/Admin/EditFoodCourt'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/viewOrders' element={<ViewOrders/>}/>
      <Route path='/editItemAvailability' element={<EditItemAvailability/>} />
      <Route path='/viewFoodCourts' element={<ViewFoodCourts/>} />
      <Route path='/foodCourtOrders/:id' element={<FoodCourtOrders />} /> 
      <Route path='/addNewFoodCourt' element={<AddNewFoodCourt />} />
      <Route path='/addNewItem' element={<AddNewItem />} />


      <Route path='/editfoodCourt/:id' element={<EditFoodCourt />} /> 

    </Routes>
    </BrowserRouter>
  )
}

export default App
