import React from 'react';

const services = [
    { icon: 'AC.svg', title: 'AC Services' },
    { icon: 'Cleaning.svg', title: 'Cleaning' },
    { icon: 'pet-control.svg', title: 'Pest Control' },
    { icon: 'home-icon.svg', title: 'Home Appliance' },
    { icon: 'computer.svg', title: 'Gadgets Repair' },
    { icon: 'fan.svg', title: 'Electronics' },
    { icon: 'light.svg', title: 'Solar Panel' },
    { icon: 'Generator.svg', title: 'Generator' },
    { icon: 'car.svg', title: 'Home/Office Shifting Services' },
    { icon: 'man.svg', title: 'Web Design & Dev.' },
];

const MainService = () => {
    return (
        <section className='py-10 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center text-center border border-black rounded-[12px] shadow-lg shadow-[rgba(0,0,0,0.10)] p-6 hover:bg-green-300 transition duration-300 transform hover:-translate-y-1 bg-white'
                        >
                            <img src={service.icon} alt="icon" className='w-[60px] h-[60px]' />
                            <p className='pt-4 text-[16px] leading-[24px] font-bold'>
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainService;
