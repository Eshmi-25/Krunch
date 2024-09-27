import './App.css'
import LandingPage from './pages/LandingPage'
import ViewOrders from './pages/FoodCourt/ViewOrders'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/viewOrders' element={<ViewOrders/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
