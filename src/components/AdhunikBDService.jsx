import React from 'react';

const AdhunikBDService = () => {
    return (
        <section className='pb-[70px]'>
            <div className="container mx-auto px-4">
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-6 lg:px-[64px] bg-[rgba(34,197,94,0.15)] rounded-[24px]'>
                   
                    <div className='w-full lg:w-1/2 pt-[41px] pb-[30px]'>
                        <h3 className='text-[#22C55E] text-[24px] sm:text-[30px] font-bold leading-[36px] font-lato pb-[20px]'>
                            Adhunik BD
                        </h3>
                        <h2 className='font-open-sans text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] max-w-[447px]'>
                            The <span className='text-[#22C55E]'>premium</span> service solution for home & office
                        </h2>

                     
                        <div className='flex flex-col sm:flex-row pt-6 gap-4 sm:gap-6'>
                            <div className='bg-[rgba(255,255,255,0.5)] py-4 px-4 sm:pr-[50px] rounded-[8px] flex-1'>
                                <img className='bg-[rgba(34,197,94,0.19)] rounded-full p-3 w-[48px] h-[48px]' src="expart.svg" alt="icon" />
                                <p className='text-[16px] leading-[24px] pt-3'>Expert Technicians</p>
                            </div>
                            <div className='bg-[rgba(255,255,255,0.5)] py-4 px-4 sm:pr-[50px] rounded-[8px] flex-1'>
                                <img className='bg-[rgba(34,197,94,0.19)] rounded-full p-3 w-[48px] h-[48px]' src="satisfaction.svg" alt="icon" />
                                <p className='text-[16px] leading-[24px] pt-3'>Satisfaction Guaranteed</p>
                            </div>
                        </div>

                    
                        <div className='mt-6 sm:mt-11 flex justify-start sm:justify-end'>
                            <div className='bg-[rgba(255,255,255,0.5)] py-4 px-4 sm:pr-[50px] rounded-[8px]'>
                                <img className='bg-[rgba(34,197,94,0.19)] rounded-full p-3 w-[48px] h-[48px]' src="satisfaction.svg" alt="icon" />
                                <p className='text-[16px] leading-[24px] pt-3'>Satisfaction Guaranteed</p>
                            </div>
                        </div>
                    </div>

                 
                    <div className='w-full lg:w-1/2 px-4 lg:px-[60px] pb-8 lg:pb-0'>
                        <img className='w-full h-auto rounded-xl' src="sideBannerIMG.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdhunikBDService;
