import '../global.css'
import logo from '../assets/blood.png'

export default function Navbar(){
    return(
        <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Donate</a></li>
          <li><a href="#">Why donate?</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
    )
}