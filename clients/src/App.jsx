import './App.css'
import Register from './components/Auth/Register.jsx';
import Login from './components/Auth/Login.jsx'
import LandingPage from './components/Landing/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import ManageCategories from './components/manger/ManageCategories.jsx';
import ProtectedRoutes from './Routes/ProtectedRoutes.jsx';
import {Toaster} from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Toaster position="top-center"/>
    <Routes>
      <Route path='/' element={
      <ProtectedRoutes>
        <LandingPage/>
      </ProtectedRoutes>
      }></Route>

      <Route path='/manager/categories' element={
        <ProtectedRoutes>
          <ManageCategories/>
        </ProtectedRoutes>
        }></Route>  
  

      <Route path='/register' element={
        <ProtectedRoutes>
          <Register/>
        </ProtectedRoutes>
        }></Route>

      <Route path='/login' element={
        <ProtectedRoutes>
          <Login/>
        </ProtectedRoutes>
        }></Route>

      <Route path='/user/home' element={
        <ProtectedRoutes>
          <Home/>
        </ProtectedRoutes>
        }></Route>


       </Routes>
    </>
  )
}

export default App
