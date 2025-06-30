import React from 'react'

const Login = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-[rgba(113,113,122,0.07)] px-4'>
      <div className='max-w-sm w-full bg-white p-6 rounded-lg shadow-lg'>
        <div>
          <h2 className='font-lato font-bold text-[24px] sm:text-[30px] leading-[28px] sm:leading-[32px] text-[rgba(0,0,0,0.75)]'>
            Welcome to Adhunik Bd
          </h2>
          <p className='font-open-sans text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[rgba(0,0,0,0.6)] pt-2 sm:pt-3 max-w-[320px]'>
            Enter your phone number or continue with Google
          </p>
        </div>

        <div className='mt-6'>
          <label className='font-open-sans text-[12px] sm:text-[14px] leading-[14px] sm:leading-[16px]' htmlFor="phone">Phone</label>
          <input id="phone" className='border border-[#86EFAC] rounded-[8px] py-2.5 px-3 w-full mt-1 text-[14px] sm:text-[16px]' type="tel" placeholder='01XXXXXXXXX' maxLength={11}/>
        </div>
        <div className='mt-6'>
          <button className='text-white font-sans text-[14px] leading-[20px] py-3 bg-[#166534] rounded-[6px] w-full hover:bg-green-500 hover:text-black transition'>
            <a href="#">Send OTP</a>
          </button>
        </div>

        <p className='font-open-sans text-[12px] leading-[16px] text-[#374151] py-6 flex items-center justify-center'>OR</p>

        <div>
          <button className='flex justify-center items-center gap-2 border border-[rgba(0,0,0,0.05)] w-full rounded-[6px] py-3 px-6 hover:text-white hover:bg-blue-800 transition'>
            <a className='flex items-center gap-2' href="#">
              <img src="google.svg" alt="Google icon" className='w-5 h-5' />
              <span className='text-[14px] sm:text-[16px]'>Continue with Google</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Login
