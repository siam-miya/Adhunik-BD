const Contact = () => {
  return (
    <section className='contact-us'>
      <div className='bg-[#F5F5F5]'>
        <h1 className='font-lato font-bold text-[32px] md:text-[48px] leading-[40px] md:leading-[48px] text-[#00000075] flex items-center justify-center pt-8'>
          Contact Us
        </h1>

        <div className='flex items-center justify-center gap-2 pb-16 pt-5'>
          <ul className='font-open-sans font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[rgba(0,0,0,0.6)] hover:bg-green-600 hover:text-white hover:rounded-md px-2 py-1 cursor-pointer'>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <img className='w-4 md:w-5' src="aro.svg" alt="icon" />
          <ul className='font-open-sans font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#77A1D3] hover:bg-green-600 hover:text-white hover:rounded-md px-2 py-1 cursor-pointer'>
            <li>
              <a href="/contact us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <p className='pt-10 pb-8 text-center px-4 max-w-3xl mx-auto'>
        Get in touch with our team for any service inquiries or support
      </p>

      <div className="container mx-auto px-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
          <div className="py-8 px-6 border border-[#00000009] shadow-sm hover:shadow-2xl rounded-lg">
            <h3 className='font-lato font-bold text-[22px] md:text-[24px] leading-[28px] md:leading-[32px] mb-6'>Official Contact</h3>

            <div className='flex items-center gap-4 mb-6'>
              <div className='bg-[rgba(66,134,244,0.25)] rounded-full p-3'>
                <img src="whatsapp-contact.svg" alt="Whatsapp icon" className='w-6 h-6' />
              </div>
              <div>
                <h5 className='font-lato font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-1'>Whatsapp / phone</h5>
                <p>+8801971-455388</p>
                <p>+8801971-455391</p>
              </div>
            </div>

            <div className='flex items-center gap-4 mb-6'>
              <div className='bg-[#16a34a2e] rounded-full p-3'>
                <img src="email.svg" alt="Email icon" className='w-6 h-6' />
              </div>
              <div>
                <h5 className='font-lato font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-1'>Email</h5>
                <a href="mailto:info.adhunikbd@gmail.com" className='font-open-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#4B5563] hover:text-blue-500'>
                  info.adhunikbd@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-center gap-4 mb-6'>
              <div className='bg-[rgba(66,134,244,0.25)] rounded-full p-3'>
                <img src="web-logo.svg" alt="Website icon" className='w-6 h-6' />
              </div>
              <div>
                <h5 className='font-lato font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-1'>Website</h5>
                <a href="https://adhunikbd.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
                  Adhunikbd.com</a>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='bg-[rgba(220,38,38,0.22)] rounded-full p-3 mt-1'>
                <img src="location.svg" alt="Location icon" className='w-6 h-6' />
              </div>
              <div>
                <h5 className='font-lato font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-1'>Workshop Locations</h5>
                <p className='pt-1'>আমাদের ওয়ার্কশপ আছে মিরপুর, বাড্ডা এবং মগবাজার</p>
                <p>Mirpur Section 7, Len 1, Shop-8</p>
                <p>Uttar Badda, Tetul Tolar Mor Shop-178</p>
                <p>Boro Mogbazar, Sattara Gali, Shop-282</p>
              </div>
            </div>
          </div>
          <div className='border border-[#00000009] pt-6 px-6 shadow-sm hover:shadow-2xl rounded-lg'>
            <h3 className='font-lato font-bold text-[22px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#1F2937] mb-6'>Get in Touch</h3>
            <form>
              <label className='block font-open-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-2'>Name</label>
              <input className='border border-[#9CA3AF] rounded-md py-2 px-3 w-full mb-4 text-[rgba(0,0,0,0.8)]'type="text" placeholder='Your name' required/>
              <label className='block font-open-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-2'>Email</label>
              <input
                className='border border-[#9CA3AF] rounded-md py-2 px-3 w-full mb-4 text-[rgba(0,0,0,0.8)]'type="email" placeholder='your.email@example.com' required/>

              <label className='block font-open-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#374151] mb-2'>Message</label>
              <textarea className='border border-[#9CA3AF] rounded-md py-2 px-3 w-full mb-6 text-[rgba(0,0,0,0.8)] resize-none h-32' placeholder='How can we help?' required/>
              <button type="submit" className='w-full bg-[#16A34A] text-white py-3 rounded-md font-open-sans font-semibold hover:bg-amber-500 transition duration-300'>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='border border-[#00000009] shadow-sm rounded-lg mt-12 overflow-hidden'>
          <h2 className='font-lato font-bold text-[22px] md:text-[24px] leading-[28px] md:leading-[32px] pt-6 px-6'>Our Locations on Map</h2>
          <div className="w-full h-[300px] md:h-[450px] px-6 pb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.596308215208!2d90.410392!3d23.790201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1750533726815!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Adhunik BD Locations"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
