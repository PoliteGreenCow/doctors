import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />
  }
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  }
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get an Opinion"
  }
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  }
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-white pb-16 pt-10 mt-auto'> {/* Use 'mt-auto' to stick to bottom */}
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row justify-between flex-wrap gap-6 md:gap-4'>
          <div className='flex-1'>
            <img src={logo} alt='logo' className='mx-auto md:mx-0' />
            <p className='text-[16px] leading-7 font-[400] text-black mt-4 text-center md:text-left'>
              Copyright &copy; {year} developed by Group 10. All rights reserved.
            </p>
          </div>
          <div className='flex-1'>
            <h3 className='text-[20px] font-semibold text-black text-center md:text-left'>Quick Links</h3>
            <ul className='text-center md:text-left'>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mt-2'>
                  <Link to={item.path} className='text-[16px] text-black'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-[20px] font-semibold text-black text-center md:text-left'>Quick Links</h3>
            <ul className='text-center md:text-left'>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mt-2'>
                  <Link to={item.path} className='text-[16px] text-black'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-[20px] font-semibold text-black text-center md:text-left'>Quick Links</h3>
            <ul className='text-center md:text-left'>
              {quickLinks03.map((item, index) => (
                <li key={index} className='mt-2'>
                  <Link to={item.path} className='text-[16px] text-black'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-[20px] font-semibold text-black text-center md:text-left'>Follow Us</h3>
            <div className='flex justify-center md:justify-start gap-4 mt-4'>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group text-black hover:text-primaryColor'
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
