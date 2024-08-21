import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import '../index.css';
import logo from '../assets/images/logo.png'


const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const handleScroll = () =>{
    setScrollY(window.scrollY)
    console.log(scrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  })
   
  return (
    <section className="header">
      <div className="header__container" >
        <div className="topbar">
          <div className="left__side">
              <div className="time">
                <p><IoIosTime /> Opening Hours: 8: 00 - 18:00 Mon-Sat </p>
              </div>
              <div className="socials"> 
              <a href=""><FaFacebookF /></a>
              <a href=""><FaTiktok /></a>
              <a href=""><FaInstagram /></a>
          </div>
          </div>
          <div className="right__side">
           <button className="btn">
            Portal
           </button>
          </div>
        </div> 
        <div className={`nav__container ${scrollY > 15 ? 'scrolled' : 0}`}>
            <div className="logo">
              <img src={logo} alt="" />
              <p>Bawuj <span>School</span></p>
            </div>
            <div className='nav__menu'>
              <ul className='nav__links'>
                <li className='nav__link'><Link to ="/" className = "nav__link">Home</Link></li>
                <li className='nav__link'>
                <Link to = "/about" className = "nav__link dropdown">
                About
                </Link>
                  <ul className='dropdown__menu'>
                    <li className='dropdown__list'>About-us</li>
                    <li className='dropdown__list'>Facilities</li> 
                    <li className='dropdown__list'>Hostel</li>
                    <li className='dropdown__list'>FAQ</li>
                  </ul>
                </li>
                <li className='nav__link'><Link to = "/classes" className = "nav__link dropdown">
                Academics
                </Link>
                <ul className="dropdown__menu">
                  <li className='dropdown__list'><Link to="/kindagarten">Kindagarten</Link></li>
                  <li className='dropdown__list'><Link to ="/primary">Primary</Link></li>
                  <li className='dropdown__list'>Secondary</li>
                </ul>
                </li>
                <li className='nav__link'><Link to = "/admission" className = "nav__link">Admission</Link></li>
                <li className='nav__link'><Link to = "/events" className = "nav__link">Activities</Link></li>
                <li className='nav__link'><Link to = "/blog" className = "nav__link">News</Link></li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header