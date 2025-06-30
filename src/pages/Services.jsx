const Services = () => {
  return (
    <section className="sec px-4 py-8 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="section-items">
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:gap-10 gap-6">
            <div className="md:flex-1">
              <input className="border border-[#71717A] rounded-lg w-full max-w-md py-2.5 px-4 text-base placeholder:text-gray-500" type="search" placeholder="Search..."/>
            </div>
            <div className="md:flex-2 w-full">
              <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  "All",
                  "AC Services",
                  "Cleaning",
                  "Pest Control",
                  "Home Appliance",
                  "Gadgets Repair",
                  "Electronics",
                  "Solar Panel",
                  "Generator",
                  "Home/Office Shifting Services",
                  "Web Design & Dev."
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className={`font-open-sans text-xs leading-4 inline-block rounded-md pt-2 pr-3 pb-2 pl-3
                        ${service === "All"
                          ? "bg-[#166534] text-white"
                          : "border border-[#71717A] text-black hover:border-0 hover:bg-[#166534] hover:text-white transition"
                        }`}>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 pb-16">
            {[
              { src: "ac-image.jpg", text: "AC Water Drop Solution" },
              { src: "solarPanel.jpg", text: "Solar Panel Service" },
              { src: "rodent.jpg", text: "Rodent Control" },
              { src: "ac-install.jpg", text: "AC Installation" },
              { src: "ac-unstall.jpg", text: "AC Uninstallation or Dismantling" },
              { src: "Desktop.jpg", text: "Desktop" },
              { src: "generator.jpg", text: "Generator Installation" },
              { src: "Burner.jpg", text: "Gas Stove/Burner" },
              { src: "water-tank.jpg", text: "Water Tank Cleaning" },
              { src: "IPS.jpg", text: "IPS" },
              { src: "board-service.jpg", text: "Board Service" },
              { src: "drilling.jpg", text: "Drilling Service" },
              { src: "TV.jpg", text: "TV" },
              { src: "bathroom.jpg", text: "Bathroom Deep Cleaning" },
              { src: "window.jpg", text: "Window & Thai Cleaning" },
              { src: "Treadmill.jpg", text: "Treadmill" },
              { src: "generator-service.jpg", text: "Generator Servicing" },
              { src: "basic-clean.jpg", text: "Basic Cleaning" },
              { src: "vertical.jpg", text: "Vertical Blind Cleaning" },
              { src: "Laptop.jpg", text: "Laptop" },
              { src: "sofa.jpg", text: "Chair/Sofa Cleaning" },
              { src: "Microwave.jpg", text: "Microwave" },
              { src: "genaral.jpg", text: "General Spraying" },
              { src: "generator-r.jpg", text: "Generator Repair" },
              { src: "ac-basic.jpg", text: "AC Basic Services" },
              { src: "wahing.jpg", text: "Washing Machine" },
              { src: "FAN.jpg", text: "Fan Service" },
              { src: "bedbug.jpg", text: "Bedbug Control" },
              { src: "ac-shifting.jpg", text: "AC Installation & Uninstallation or Shifting" },
              { src: "Refrigerator.jpg", text: "Refrigerator" },
              { src: "CCTV.jpg", text: "CCTV" },
              { src: "Cockroach-C.jpg", text: "Cockroach Control" },
              { src: "home-dc.jpg", text: "Home Deep Cleaning" },
              { src: "outside-dhaka-bd.jpg", text: "Outside Dhaka (Dhaka to Anywhere in Bangladesh)" },
              { src: "ac-master-service.jpg", text: "AC Master Services" },
              { src: "generator-shifting.jpg", text: "Generator Shifting" },
              { src: "hydro-wash.jpg", text: "AC Jet Wash/Hydro Wash" },
              { src: "ac-repair.jpg", text: "AC Circuit Repair or Replacement" },
              { src: "floor-d-c.jpg", text: "Floor Deep Cleaning" },
              { src: "Kitchen-Hood.jpg", text: "Kitchen Hood" },
              { src: "inside-dhaka.jpg", text: "Inside Dhaka (Dhaka to Dhaka)" },
              { src: "k-d-c.jpg", text: "Kitchen Deep Cleaning" },
              { src: "carpet-c.jpg", text: "Carpet Cleaning" },
              { src: "ac-gas-charge.jpg", text: "AC Gas Charge" },
              { src: "ac-compressure-w-gas-change.jpg", text: "AC Compressor with Gas Change" },
              { src: "ac-leak-repair.jpg", text: "AC Leak Repair" },
              { src: "electrick-glass.jpg", text: "Electric Geyser" },
              { src: "termite-control.jpg", text: "Termite Control" },
            ].map(({ src, text }) => (
              <div key={text} className="border border-[rgba(0,0,0,0.1)] rounded-xl shadow-sm hover:shadow-2xl transition cursor-pointer">
                <img className="py-5 px-5 w-full h-48 object-contain" src={src} alt={text} />
                <p className="font-open-sans font-semibold text-sm leading-5 text-black px-4 pb-5 text-center">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
