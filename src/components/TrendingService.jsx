import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularService = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const services = [
        { title: "AC Leak Repair", image: "/ac-leak-repair.jpg" },
        { title: "Carpet Cleaning", image: "/carpet-c.jpg" },
        { title: "Floor Deep Cleaning", image: "/floor-d-c.jpg" },
        { title: "General Spraying", image: "/genaral.jpg" },
        { title: "AC Installation", image: "/ac-install.jpg" },
        { title: "Gas Stove/Burner", image: "/Burner.jpg" },
        { title: "Refrigerator", image: "/Refrigerator.jpg" },
        { title: "IPS", image: "/IPS.jpg" },
    ];

    return (
        <section className="pt-20 pb-10">
            <div className="container mx-auto px-4">
                <h2 className="font-lato text-[32px] md:text-[40px] lg:text-[48px] text-[#0D4442] pb-10 text-center md:text-left">
                    Trending
                </h2>

                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="px-2">
                            <PopularServiceCard title={service.title} image={service.image} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const PopularServiceCard = ({ image, title }) => {
    return (
        <div className="bg-[#28A69F] w-full rounded-[12px] p-4 h-[250px] flex flex-col justify-between">
            <h2 className="font-bold text-[16px] sm:text-[18px] leading-[24px] text-white">
                {title}
            </h2>
            <div className="w-full h-[180px] rounded-[6px] overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt={title} />
            </div>
        </div>
    );
};

const SampleNextArrow = ({ onClick }) => (
    <button
        className="absolute top-[40%] -right-4 z-10 size-[40px] rounded-full bg-white p-[7px] shadow-2xl grid place-items-center hover:bg-gray-200 transition"
        onClick={onClick}> <MdNavigateNext size={20} />
    </button>
);

const SamplePrevArrow = ({ onClick }) => (
    <button
        className="absolute top-[40%] -left-4 z-10 size-[40px] rounded-full bg-white p-[7px] shadow-2xl grid place-items-center hover:bg-gray-200 transition"
        onClick={onClick}
    >
        <GrFormPrevious size={20} />
    </button>
);

export default PopularService;
