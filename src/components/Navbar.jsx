import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-2xl transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-5 transition-all duration-300">
          {/* Logo */}
          <div className="logo transition-transform duration-300 hover:scale-105">
            <Link to="/">
              <img src="/Main-logo.svg" alt="icon" className="h-8 md:h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-open-sans font-semibold text-base">
            <li>
              <Link to="/" className="hover:text-green-700 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-700 transition-colors duration-300">Services</Link>
            </li>
          </ul>

          {/* Icons and Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="bg-[rgba(69,82,101,0.38)] hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
              <img src="/cart.svg" alt="cart" className="h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link to="/login" className="text-white bg-[#166534] hover:bg-black transition-all duration-300 px-4 py-2 rounded-md text-sm md:text-base max-w-[80px] text-center">
              Login
            </Link>

            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden transition-all duration-300">
              {isOpen ? <FiX className="h-6 w-6 transition-transform duration-300 hover:rotate-90" /> : <FiMenu className="h-6 w-6 transition-transform duration-300 hover:rotate-90" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-open-sans font-semibold text-base py-4">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-colors duration-300">Home</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-colors duration-300">Services</Link></li>
            <li><Link to="/cart" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-colors duration-300">Cart</Link></li>
            <li><Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-green-700 transition-colors duration-300">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
