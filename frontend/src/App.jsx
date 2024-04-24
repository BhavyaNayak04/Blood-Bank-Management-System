import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Donate from './pages/DonatePage';
import {Routes, BrowserRouter, Route, Navigate} from 'react-router-dom';
import Search from './pages/Search';
import BloodAvailable from './pages/BloodAvailable';
import Logout from './pages/Logout';
import AdminLayout from './pages/AdminLayout';
import AdminHome from './pages/AdminHome';
import ModifyDonors from "./Components/Admin/ModifyDonor";
import ModifyHospital from "./Components/Admin/ModifyHospital";
import Queries from "./Components/Admin/Queries";
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/donate' element={<Donate/>}/> 
            <Route path='/search-results' element={<BloodAvailable/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/admin/*' element={<AdminLayout/>}>
              <Route path='home' element={<AdminHome/>}></Route>
              <Route path="modify-donors" element={<ModifyDonors/>} />
              <Route path="modify-hospitals" element={<ModifyHospital/>} />
              <Route path="resolve-issues" element={<Queries/>} />
            </Route>
            <Route path='/logout' element={<Logout/>}/>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}