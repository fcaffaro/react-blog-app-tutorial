import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const LayoutPage = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    );
}

export default LayoutPage;