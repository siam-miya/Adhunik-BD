

const VideoSection = () => {
  return (
    <section className="py-12">
      <div className='container mx-auto px-4'>
        <h2 className='font-lato text-[28px] md:text-[36px] leading-[40px] text-center md:text-left'>
          How services look like on <span className='text-[#22C55E]'>Adhunik BD</span>
        </h2>

        <div className='pt-10'>
          <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-lg shadow-lg">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQky_Sg5uzU?si=oKU2YJ57RpVhREVU" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
