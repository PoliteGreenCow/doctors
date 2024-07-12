import React, { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../Context/authContext';

const navlinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const location = useLocation();

  const handleStickyHeader = () => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    };

    // Initial call to set sticky header on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  };

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <img src={logo} alt='Logo' />
          </div>
          {/* menu */}
          <div className='navigation' ref={menuRef}>
            <ul className='menu flex items-center gap-[1.7rem]'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className='text-black text-base md:text-lg leading-7 font-medium hover:text-primaryColor relative'
                    activeClassName='text-primaryColor font-bold border-b-[#4ADAB7] border-opacity-0 group-hover:border-opacity-100'
                  >
                    {link.display}
                    {location.pathname === link.path && (
                      <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primaryColor transition-all opacity-100' />
                    )}
                  </NavLink>
                </li>
              ))}
              {token && (
                <li>
                  <NavLink
                    to='/doctors'
                    className='text-black text-base md:text-lg leading-7 font-medium hover:text-primaryColor relative'
                    activeClassName='text-primaryColor font-bold border-b-[#4ADAB7] border-opacity-0 group-hover:border-opacity-100'
                  >
                    Find a Doctor
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          {/* nav right */}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <div>
                <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo} className='w-full rounded-full' alt='User' />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className='bg-primaryColor py-3 px-4 text-white
                font-semibold h-[50px] flex items-center 
                justify-center rounded-[8px]'>
                  Login
                </button>
              </Link>
            )}

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
