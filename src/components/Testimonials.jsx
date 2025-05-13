import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    logo: "/Images/amazon-ae.png",
    title: "Amazon.ae",
    content:
      "U-link Gulf has played a key role in elevating our seller operations in the UAE. Their vision, professionalism, and technical expertise have been truly impressive.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/Noon.png",
    title: "Noon",
    content:
      "Partnering with U-link Gulf gave our platform a competitive edge. Their expert solutions helped streamline our seller support and account performance.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/tradling.png",
    title: "Tradeling.com",
    content:
      "U-link Gulf brings valuable insights and innovative marketplace solutions. Their understanding of the Gulf e-commerce market is unmatched.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/soug.png",
    title: "Souq",
    content:
      "Working with U-link Gulf has been an excellent experience. Their team is reliable and always focused on delivering results that matter to our region.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/Amazon.sa_.png",
    title: "Amazon.sa",
    content:
      "U-link Gulf understands the Saudi marketplace like few others. Their support has helped us scale with confidence and efficiency.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/talabat.png",
    title: "Talabat",
    content:
      "The level of service and commitment we received from U-link Gulf was outstanding. Their team adapted to our needs and exceeded expectations.",
    inventoryManaged: false,
  },
  {
    logo: "/Images/carina.png",
    title: "Carina Kuwait",
    content:
      "From Kuwait, we recognize U-link Gulf as a dependable digital partner. Their solutions helped optimize our seller accounts across platforms.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/dawrat.png",
    title: "Dawrat (Bahrain)",
    content:
      "U-Link Gulf brought a level of structure and strategy to our operations that helped us compete in Bahrain's digital market more effectively.",
    inventoryManaged: true,
  },
  {
    logo: "/Images/mzadqatar.svg",
    title: "Mzad Qatar",
    content:
      "In Qatar's evolving online market, U-link Gulf provided us with scalable and flexible solutions. A great team to collaborate with!",
    inventoryManaged: true,
  },

];



const PartnerTestimonials = () => {
  return (
    <section className="bg-white py-16 px-4 relative">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center max-w-md mx-auto text-center p-6 space-y-4">
              <div className="h-16 mb-2">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="object-contain h-full"
                />
              </div>
              <div className="bg-white border border-gray-200 rounded-r-[2rem] rounded-b-[0.75rem] shadow-lg px-6 py-6 transition-all hover:shadow-xl duration-300">
                <h3 className="text-[#009000] font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-semibold">
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PartnerTestimonials;