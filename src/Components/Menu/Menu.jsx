import React, { useEffect, useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import logo_white from '../../images/Menu/logo_white.png';
import logo_dark from '../../images/Menu/logo-dark.png';

function Menu() {
    const [scroll, setScroll] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`headerMenu ${scroll ? 'scroll' : ''}`}>
            <Link to='/'><img className='headerLogotype' src={scroll ? logo_dark : logo_white} alt="Logotype" /></Link>


            {
                windowWidth < 769
                    ? <div  className={`nav-mobile jsNavMobile ${isMenuOpen ? 'nav-mobile-close' : ''}`} onClick={e => setIsMenuOpen(!isMenuOpen)}><span></span><span></span><span></span></div>
                    : <ul className='headerLinks'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/how-it-works'>How It Works?</Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/download'>Download</Link></li>
                        <li><Link to='/faq'>F.A.Q</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/'><button className='headerButton'>START</button></Link></li>
                    </ul>
            }

            {
                isMenuOpen
                    ? <div className='mobileMenu'>
                        <ul className='headerLinksMobile'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/how-it-works'>How It Works?</Link></li>
                            <li><Link to='/pricing'>Pricing</Link></li>
                            <li><Link to='/download'>Download</Link></li>
                            <li><Link to='/faq'>F.A.Q</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/'><button className='headerButton'>START</button></Link></li>
                        </ul>
                    </div>
                    : null
            }

        </nav>
    );
}

export default Menu;
