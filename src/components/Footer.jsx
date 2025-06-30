import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[rgba(220,252,231,0.32)] pt-8 md:pt-10">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">

          <div className="logo flex justify-center md:justify-start py-5 md:py-10">
            <img src="footer-logo.svg" alt="logo" className="h-10 md:h-14" />
          </div>

          <div className="flex justify-center md:justify-center w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-lato font-bold text-[14px] leading-[20px] text-black max-w-full md:max-w-none">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Condition</a></li>
              <li><Link to="/contact_us" className="hover:underline">Contact Us</Link></li>
              <li><a href="#" className="hover:underline">Vendor Login</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00000011] mt-6 md:mt-10"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 md:mt-10 px-2 md:px-0 gap-6 md:gap-0">
          <p className="text-black font-open-sans font-light text-[14px] leading-[20px] text-center md:text-left">
            © 2025 Adhunik BD. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="transform hover:-translate-y-1 transition duration-300">
              <img src="whatsapp.svg" alt="WhatsApp" className="h-6 w-6 md:h-7 md:w-7" />
            </a>
            <a href="#" className="transform hover:-translate-y-1 transition duration-300">
              <svg
                width="13"
                height="22"
                viewBox="0 0 13 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-blue-700"
              >
                <path
                  d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="transform hover:-translate-y-1 transition duration-300">
              <img src="youtube.svg" alt="YouTube" className="h-6 w-6 md:h-7 md:w-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
