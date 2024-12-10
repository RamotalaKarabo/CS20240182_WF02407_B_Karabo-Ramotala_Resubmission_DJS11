import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

const HomeNavBar = () => {

  const [MobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    ;
  };

  console.log(MobileNav);

  const navLinks = [
    {
      name:"Home",
      path:"/"
    },
    {
      name:"Categories",
      path:"/categories"
    },
    {
      name:"All Podcasts",
      path:"/all-podcasts"
    }
  ]

  return (      
      <nav className="px-4 md:px-8 lg:px-12 py-2 relative">
        <div className="flex items-center justify-between">
          {/* Logo/Home */}
          <div className="logo brand-name w-2/6 flex items-center gap-4">
            <Link to="/" className="text-xl font-semibold w-2/6 flex items-center gap-4">
            <img src="../src/assets/logo.png" className="w-4/6" alt="podcast hub  logo "/>
            <span className="flex flex-col hover:opacity-50">
            <span className="font-bold text-purple-400">The</span>
            <span className="font-extrabold"> PodCast </span>
            <span className="font-bold text-purple-400"> Hub</span>
            </span>
            </Link>
          </div>

          {/* Navigation Links*/}
          <div className="hidden w-2/6 lg:flex items-center justify-center flex-center">

            {navLinks.map((items, i) => (
              <Link key={i} to={items.path} className="ms-4 hover:font-bold hover:text-purple-700 transition-all duration-300">{items.name}</Link>
            ))}
          </div>
            {/* Authentication buttons (Sign-in | Sign-up) */}
          <div className="hidden w-2/6 lg:flex items-center justify-end">
          <Link 
            to="/login"
            className="px-6 py-3 border border-purple-500 text-purple-900 font-bold rounded-full hover:bg-purple-500 hover:text-white border-2 transition-all duration-700">
              Log-in</Link>
          <Link 
            to="/signup"
            className="ms-4 px-6 py-3 bg-purple-900 text-white rounded-full hover:bg-purple-700 transition-all duration-700">
              Sign-up</Link>
          </div>

          <div className="w-4/6 flex items-center justify-end lg:hidden z-50">
            <button className={`text-xl 
            ${MobileNav ? "rotate-360" : "rotate-180"} 
            transition-all duration-300 }`}
            onClick={() => setMobileNav(!MobileNav)}>
            {MobileNav ?  <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
            </button>
          </div>
        </div>        
        
        <div className={`fixed top-0 left-0 w-full h-screen bg-blue-100
          ${MobileNav ? "translate-y-[0%]" : "translate-y-[-100%]" } transition-transform duration-500 ease-in-out z-10`}>

          <div className={"h-full flex flex-col items-center justify-center"}>
            {" "}
            {navLinks.map((items, i) => (
                        <Link key={i} 
                        to={items.path}
                        onClick={() => setMobileNav(!MobileNav)} 
                        className="mb-12 text-xl hover:font-semibold transition-all duration-300">
                        {items.name}
                        </Link>
                      ))}
                      <Link
                        to="/login"
                        className="mb-12 text-xl hover:font-semibold transition-all duration-300"
                        onClick={handleClick}>
                          Login
                      </Link>
                      <Link
                        to="/signup"
                        className="mb-12 text-xl hover:font-semibold transition-all duration-300">
                          Sign-up
                      </Link>
          </div>
        </div>
      </nav>
  )
}

export default HomeNavBar