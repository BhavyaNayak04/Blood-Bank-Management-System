import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Donate from './pages/Donate';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Search from './pages/Search';
import BloodAvailable from './pages/BloodAvailable';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>

            {/* donate page */}
            <Route path='/donate' element={<Donate/>}/> 
            {/* search page */}
            <Route path='/search' element={<Search/>}/>

            <Route path="/search-results" element={<BloodAvailable/>}/>

            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}