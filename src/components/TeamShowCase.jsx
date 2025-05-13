import React, { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [

  {
    id: 1,
    name: 'Dhiraj Kumar Gupta',
    position: 'Chairman',
    bio: 'U-Link IT US is an awesome place to work with a focus on innovation and employee growth.',
    image: '/Images/2.webp',
    blobColor: 'bg-[#f9dcdc]',
    social: {
      linkedin: 'https://www.linkedin.com/in/dhiraj-kumar-gupta-45b97730/',
      twitter: 'https://x.com/dhirajkgupta84',
      email: 'dhiraj@ulinkit.com'
    }
  },
  {
    id: 2,
    name: 'Vineet Sharma',
    position: 'IT HEAD Director',
    bio: 'U-Link IT US provides consistent product quality and excellent customer service to ensure complete satisfaction.',
    image: '/Images/6.webp',
    blobColor: 'bg-[#f5f5f5]',
    social: {
      linkedin: 'https://www.linkedin.com/in/vineet-sharma-2663279/',
      twitter: '#',
      email: 'support@ulinkit.com'
    }
  },
  
];

const TeamShowcase = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#fde8e8] rounded-full -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f0f7ff] rounded-full -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 uppercase text-sm mb-2 tracking-widest font-medium">We Are There For You</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#b73235] mb-2">U-Link IT US</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-12">Meet Our Professionals</h3>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              className="relative w-[300px] text-center group"
              variants={itemVariants}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              whileHover={hoverVariants}
            >
              {/* Abstract shape behind image */}
              <motion.div
                className={`absolute w-[200px] h-[200px] ${member.blobColor} rounded-[60%] top-0 left-1/2 transform -translate-x-1/2 -z-10`}
                animate={{
                  rotate: hoveredMember === member.id ? [0, 5, -5, 0] : 0,
                  scale: hoveredMember === member.id ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Profile image */}
              <div className="relative">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-[30%] mx-auto mb-4 border-4 border-white shadow-lg"
                  whileHover={{ borderRadius: "35%" }}
                />
                {/* Social media links */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredMember === member.id ? 1 : 0,
                    y: hoveredMember === member.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a 
                      key={platform} 
                      href={link} 
                      className="bg-white p-2 rounded-full shadow-md hover:bg-[#b73235] hover:text-white transition-colors"
                      aria-label={`${member.name}'s ${platform}`}
                    >
                      <i className={`fab fa-${platform} text-sm`}></i>
                    </a>
                  ))}
                </motion.div>
              </div>

              <h4 className="text-xl font-bold text-[#b73235] group-hover:text-[#9a292b] transition-colors">
                {member.name}
              </h4>
              <p className="text-gray-800 text-sm font-medium mb-3">{member.position}</p>
              <motion.p 
                className="mt-3 text-sm text-gray-600"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredMember === member.id ? 1 : 0.8,
                  height: 'auto'
                }}
              >
                {member.bio}
              </motion.p>
              
              {/* Contact button */}
              <motion.button
                className="mt-4 px-6 py-2 bg-[#b73235] text-white rounded-full text-sm font-medium hover:bg-[#9a292b] transition-colors shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = `mailto:${member.social.email}?subject=Let's Connect&body=Hi ${member.name},%0D%0A%0D%0AI would love to connect with you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
                }}
                
                
              >
                Contact Mr.{member.name.split(' ')[0]}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated floating elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-8 h-8 bg-[#b73235] rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-20 w-6 h-6 bg-blue-200 rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </section>
  );
};

export default TeamShowcase;