import Logo from "../img/Logo.png"
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div className="Navbar">
        <div><img src={Logo} alt=""  /></div>
        <div>
            <ul>
                <li>Desitnations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Booking</li>
                <li>Login</li>
                <li>Sign up</li>
                <li>EN</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar