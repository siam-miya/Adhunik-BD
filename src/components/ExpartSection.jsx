import { CiSearch } from "react-icons/ci";

const ExpartSection = () => {
    return (
        <section className='relative bg-[url("/expart.jpg")] bg-cover bg-center bg-no-repeat w-full h-auto lg:h-[704px]'>
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[500px] lg:min-h-[704px]">
                <div className="text-center max-w-[979px]">
                    <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-lato pb-6">
                        Make Your Home Appliance Services<br />
                        Simplified And Reliable.
                    </h1>
                    <p className="text-white text-[14px] sm:text-[16px] leading-[24px] max-w-[840px] mx-auto py-6 font-open-sans px-2">
                        From AC repair and installation to plumbing, electrical work, and more, we connect you with trusted professionals.
                        Enjoy seamless service bookings and secure payments—all in one place.
                    </p>
                    <div className="w-full max-w-[400px] mx-auto py-[7px] px-[13px] bg-white border border-[#86EFAC] rounded-[4px] flex gap-3 items-center mt-4">
                        <CiSearch className="text-xl text-gray-600" />
                        <input className="focus:outline-none w-full text-sm" type="search" placeholder='Search...'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpartSection;
