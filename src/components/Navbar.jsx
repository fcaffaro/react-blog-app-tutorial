import Logo from '../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const links = [
        { path: '/', label: 'science' },
        { path: '/', label: 'technology' },
        { path: '/', label: 'cinema' },
        { path: '/about', label: 'food' },
        { path: '/contact', label: 'design' }
    ];


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

                    <span>John</span>
                    <span>Logut</span>
                    <span className="write">
                        <Link to="/write">WRITE</Link>
                    </span>

                </div>
            </div>
        </div>

    );
}

export default Navbar;