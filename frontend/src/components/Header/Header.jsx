import React, { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
// Import your CSS file for styling

const navlinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Doctor',
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
            <img src={logo} alt="Logo" />
          </div>
          {/* menu */}
          <div className='navigation' ref={menuRef}>
            <ul className='menu flex items-center gap-[1.7rem]'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-base md:text-lg leading-7 font-bold'
                        : 'text-primaryColor text-base md:text-lg leading-7 font-medium hover:text-secondaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
          <div className='flex items-center gap-4'>
            <div className='hidden md:block'>
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImg} className="w-full rounded-full" alt="User" />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 text-white
                font-[600] h-[44px] flex items-center 
                justify-center rounded-[8px]'>
                Login
              </button>
            </Link> 
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
