import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

const Navbar = () => {

    const links = [
        { path: '/', label: 'science' },
        { path: '/', label: 'technology' },
        { path: '/', label: 'cinema' },
        { path: '/about', label: 'food' },
        { path: '/contact', label: 'design' }
    ];

    const {currentUser, logout} = useContext(AuthContext);
    console.log(currentUser);
    return (

        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />

                </div>
                <div className="links">
                    {
                        links.map(
                            (link, index) => (
                                <Link to={link.path + `?cat=${link.label}`} className="link" key={index}>
                                    <span>{link.label.toUpperCase()}</span>
                                </Link>
                            )
                        )
                    }

                    <span>{currentUser?.username}</span>
                    {currentUser ? <span onClick={logout}>Logut</span> : <Link className="link" to="/login">Login</Link>}
                    <span className="write">
                        <Link to="/write">WRITE</Link>
                    </span>

                </div>
            </div>
        </div>

    );
}

export default Navbar;