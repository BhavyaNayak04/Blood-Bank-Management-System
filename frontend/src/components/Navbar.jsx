import '../global.css'
import logo from '../assets/blood.png'

export default function Navbar(){
    return(
    <div>
    <div className="navbar">
    <img src={logo} alt="Logo"/>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/search">Search</a></li>
      <li><a href="/donate">Donate</a></li>
      <li><a href="/about">Why donate?</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/contact">Contact Us</a></li>
      <li><a href="/admin">Login</a></li>
    </ul>
  </div>
  </div>
    )
}