import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Donate from './pages/DonatePage';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/donate' element={<Donate/>}/> 
            /* search page */
            <Route path='/search' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}