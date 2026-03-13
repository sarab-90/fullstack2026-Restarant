import './App.css'
import Register from './components/Auth/Register.jsx';
import Login from './components/Auth/Login.jsx'
import LandingPage from './components/Landing/LandingPage.jsx';
import {Toaster} from 'react-hot-toast';
import { Route, Router, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Toaster position="top-center"/>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

       </Routes>
    </>
  )
}

export default App
