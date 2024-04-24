import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Donate from './pages/DonatePage';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Search from './pages/Search';
import BloodAvailable from './pages/BloodAvailable';
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
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}