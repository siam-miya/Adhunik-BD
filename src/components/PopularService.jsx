import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const PopularService = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        slidesToShow: 4, 
    };

    return (
        <section className="pt-20 pb-10">
            <div className="container mx-auto px-4">
                <h2 className="font-lato text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] text-[#0D4442] pb-10 text-center md:text-left">
                    Popular Services
                </h2>

                <Slider {...settings}>
                    {services.map((service, i) => (
                        <div key={i} className="px-2">
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
        <div className='bg-[#166534] w-full rounded-[12px] p-[12px] h-[250px] flex flex-col justify-between'>
            <h2 className="font-bold text-[16px] sm:text-[18px] leading-[24px] text-white px-2">
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
        onClick={onClick}
    >
        <MdNavigateNext size={20} />
    </button>
);

const SamplePrevArrow = ({ onClick }) => (
    <button
        className="absolute top-[40%] -left-4 z-10 size-[40px] rounded-full bg-white p-[7px] shadow-2xl grid place-items-center hover:bg-gray-200 transition"
        onClick={onClick}>
        <GrFormPrevious size={20} />
    </button>
);

const services = [
    { title: "AC Water Drop Solution", image: "/ac-image.jpg" },
    { title: "Kitchen Hood", image: "/Kitchen-Hood.jpg" },
    { title: "Washing Machine", image: "/wahing.jpg" },
    { title: "Treadmill", image: "/Treadmill.jpg" },
    { title: "Water Tank Cleaning", image: "/water-tank.jpg" },
    { title: "Sofa Cleaning", image: "/sofa.jpg" },
    { title: "Generator Repair", image: "/generator-r.jpg" },
    { title: "Inside Dhaka (Dhaka to Dhaka)", image: "/inside-dhaka.jpg" },
];

export default PopularService;
