import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoK from '../../../assets/images/logo-k-light.svg'
import LogoSubtitle from '../../../assets/images/logo_sub.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);


    return (
        <div className="navbar">
            <Link
                className="logo" to='/' onClick={() => setShowNav(false)}>
                <img src={LogoK} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="kayode" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    exact="true" activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faHome} color='#046e8b'
                    />
                </NavLink>
                <NavLink
                    className="about-link"
                    exact="true"
                    activeclassname="active"
                    onClick={() => setShowNav(false)}
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color='#046e8b' />
                </NavLink>
                <NavLink
                    className="project-link"
                    exact="true"
                    activeclassname="active"
                    onClick={() => setShowNav(false)}
                    to="/project"
                >
                    <FontAwesomeIcon icon={faBriefcase} color='#046e8b' />
                </NavLink>
                <NavLink
                    className="contact-link"
                    exact="true"
                    activeclassname="active"
                    onClick={() => setShowNav(false)}
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#046e8b' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/omokayode-omodara-b91a45165/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#046e8b" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://github.com/kkedarr'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#046e8b" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar;