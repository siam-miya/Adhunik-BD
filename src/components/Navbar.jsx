import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-5">
          <div className="logo">
            <Link to="/">
              <img src="Main-logo.svg" alt="icon" className="h-8 md:h-10" />
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-6 font-open-sans font-semibold text-base">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Services</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="bg-[rgba(69,82,101,0.38)] hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
              <img src="cart.svg" alt="cart" className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link to="/login" className="text-white bg-[#166534] hover:bg-black transition-colors duration-300 px-4 py-2 rounded-md text-sm md:text-base max-w-[80px] text-center">
              Login
            </Link>
          </div>
        </div>
        <div className="md:hidden mt-2">
          <ul className="flex justify-center gap-6 font-open-sans font-semibold text-base">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
