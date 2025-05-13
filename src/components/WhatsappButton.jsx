import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true); // Track whether the button should be shown or hidden

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // You can adjust the scroll value as needed
        setShowButton(true); // Show the button if scrolled down
      } else {
        setShowButton(false); // Hide the button if at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Ensure you're using the correct international format
    const whatsappNumber = "918750518844"; // Replace with correct number including country code
    const url = `https://wa.me/${whatsappNumber}`;
    
    // Open the WhatsApp link in a new tab
    window.open(url, "_blank");
  };

  return (
    showButton && (
      <button
        onClick={handleClick}
        className="fixed bottom-25 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </button>
    )
  );
};

export default WhatsAppButton;
