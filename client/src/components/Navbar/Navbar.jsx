import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <header className="navbar">

            <div className="container nav-wrapper">

                <Link to="/" className="logo">

                    <span>LUNCY</span>

                    <small>CORNER</small>

                </Link>

                <nav>

                    <ul>

                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/work">Work</Link></li>

                        <li><Link to="/about">About</Link></li>

                        <li><Link to="/testimonials">Testimonials</Link></li>

                        <li><Link to="/contact">Contact</Link></li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;