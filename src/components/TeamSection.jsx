import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    bio: "Irritably punctiliously ahead far away groundhog darn contrary and fish underneath.",
    image: "/team1.jpg"
  },
  // Add more team members as needed
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  return (
    <div className="team-section">
      <h2>Team Build Up</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id}
            className={`team-card ${selectedMember === index ? 'active' : ''}`}
            onClick={() => setSelectedMember(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="member-bio"
        key={selectedMember}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p>{teamMembers[selectedMember].bio}</p>
      </motion.div>
    </div>
  );
};

export default TeamSection;