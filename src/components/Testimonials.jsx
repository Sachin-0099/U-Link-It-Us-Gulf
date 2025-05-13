import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    logo: "/Images/amazon-uk.png",
    title: "Amazon.co.uk",
    content:
      "Continue the good work and best of success. U-vision link IT US's and dedication have helped the firm grow to become one of the world's largest online solution providers.",
  },
  {
    logo: "/Images/amazon-ae.png",
    title: "Amazon.ae",
    content:
      "U-link IT US has grown to be one of the world's largest providers of online solutions thanks to its vision and dedication. Fantastic luck and keep up the good work.",
  },
  {
    logo: "/Images/amazon-com.webp",
    title: "Amazon.com",
    content:
      "U-link IT US’s vision and hard work have pushed the company to become one of the largest online Solution provider globally. Continue the goodwork and wish you luck.",
  },
  {
    logo: "/Images/paytm.webp",
    title: "Paytm",
    content:
      "We know what it takes to emerge as a global company in the Online Industry. A strong Management and quality control can only lead to Success and that’s what U-link IT US possesses. Thank you for your Services.",
  },
  {
    logo: "/Images/indiamart.webp",
    title: "Indiamart",
    content:
      "We have been associated with U-link IT US from 2013, and in such a short span it has done a remarkable job. We hope to run long along with it. Best of Luck.",
  },
  {
    logo: "/Images/Ebay.png",
    title: "Amazon.co.uk",
    content:
      "Continue the good work and best of success. U-vision link IT US's and dedication have helped the firm grow to become one of the world's largest online solution providers.",
  },
  {
    logo: "/Images/Meesho.png",
    title: "Meesho",
    content:
      "We are aware of the requirements needed to succeed globally in the online industry. Strong management and quality assurance at U-link IT US can only lead to success. I admire your help.",
  },
  {
    logo: "/Images/Noon.png",
    title: "Noon",
    content:
      "The online industry, which seems to be growing constantly, needs a way to efficiently and effectively contact its customers in U-link IT US.",
  },
  {
    logo: "/Images/snapdeal.webp",
    title: "Snapdeal",
    content:
      "We know what it takes to emerge as a global company in the Online Industry. A strong Management and quality control can only lead to Success and that’s what U-link IT US possesses. Thank you for your Services.",
  },
  {
    logo: "/Images/soug.png",
    title: "Indiamart",
    content:
      "We have been associated with U-link IT US from 2013, and in such a short span it has done a remarkable job. We hope to run long along with it. Best of Luck.",
  },
  {
    logo: "/Images/proine.png",
    title: "Prione India",
    content:
      "Good corporate get-together and also a good experience and helpful, well-trained staff that is also supportive at U-link IT US.",
  },
  {
    logo: "/Images/tradling.png",
    title: "Tradeling.com",
    content:
      "One of the top services available is U-link IT US, whose goal is to offer clients the best services available under one roof.",
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
                <h3 className="text-[#b73235] font-bold text-lg mb-3">
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