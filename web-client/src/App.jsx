import './App.css'
import LandingPage from './pages/LandingPage'
import ViewOrders from './pages/FoodCourt/ViewOrders'
import EditItemAvailability from './pages/FoodCourt/EditItemAvailability'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/viewOrders' element={<ViewOrders/>}/>
      <Route path='/editItemAvailability' element={<EditItemAvailability/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
