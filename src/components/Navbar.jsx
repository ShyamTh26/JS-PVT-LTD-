import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Navbar.css';
import { FaHome, FaInfoCircle, FaBriefcase, FaUserTie, FaSignInAlt, FaBuilding, FaProjectDiagram, FaBook, FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const dropdowns = document.querySelectorAll('.navbar .dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.classList.add('show');
            });
            dropdown.addEventListener('mouseleave', () => {
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                dropdownMenu.classList.remove('show');
            });
        });
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#" onClick={() => handleNavigation('/')}>
                    <img
                        src="./img/JS LOGO-Pics.jpg"
                        alt="Logo"
                        className="navbar-logo"
                    />
                    <span className="brand-name ms-2">JSTechHub</span>
                </a>

                <button
                    className={`navbar-toggler custom-toggler ${menuOpen ? 'open' : ''}`}
                    type="button"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    {menuOpen ? <span className="close-icon">&times;</span> : <span className="menu-icon">&#9776;</span>}
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleNavigation('/')}>
                                <FaHome className="icon" /> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleNavigation('/careers')}>
                                <FaUserTie className="icon" /> Careers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleNavigation('/about')}>
                                <FaInfoCircle className="icon" /> About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleNavigation('/clients')}>
                                <FaBuilding className="icon" /> Clients
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                <FaBriefcase className="icon" /> Company
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark animate__animated animate__fadeInDown">
                                <li><a className="dropdown-item" onClick={() => handleNavigation('/projects')}><FaProjectDiagram /> Projects</a></li>
                                <li><a className="dropdown-item" onClick={() => handleNavigation('/courses')}><FaBook /> Courses</a></li>
                                <li><a className="dropdown-item" onClick={() => handleNavigation('/internships')}><FaLaptopCode /> Internships</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => handleNavigation('/login')}>
                                <FaSignInAlt className="icon" /> Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
