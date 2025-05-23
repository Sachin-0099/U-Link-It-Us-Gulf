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
  {
    id: 2,
    name: "Jane Smith",
    role: "COO",
    bio: "Strategically leverages synergies for team efficiency and market growth.",
    image: "/team2.jpg"
  },
  // Add more members here...
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  return (
    <section className="team-section py-16 px-4 bg-gray-50" aria-label="Team Members">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Team Build Up</h2>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Our Team"
        >
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              className={`team-card p-4 bg-white rounded-xl shadow-md transition-all cursor-pointer border ${
                selectedMember === index ? 'border-blue-600 shadow-lg' : 'border-transparent'
              }`}
              onClick={() => setSelectedMember(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              role="listitem"
              aria-selected={selectedMember === index}
              tabIndex={0}
            >
              <figure className="mb-4">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}, ${member.role}`}
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-lg"
                />
                <figcaption className="sr-only">{member.name} - {member.role}</figcaption>
              </figure>
              <div className="member-info">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="member-bio mt-10 max-w-3xl mx-auto text-center text-gray-700"
          key={selectedMember}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg italic">"{teamMembers[selectedMember].bio}"</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
