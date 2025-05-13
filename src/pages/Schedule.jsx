import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Schedule = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    purpose: 'General Inquiry',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const callOptions = [
    {
      title: "15-min Discovery Call",
      duration: "15 minutes",
      description: "Quick introduction and initial discussion about your needs"
    },
    {
      title: "30-min Consultation",
      duration: "30 minutes",
      description: "Detailed discussion about your project requirements"
    },
    {
      title: "60-min Strategy Session",
      duration: "60 minutes",
      description: "In-depth planning session for complex projects"
    }
  ];

  const contactMethods = [
    {
      title: "Whatsapp",
      icon: (
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M16 3C9.37 3 4 8.37 4 15C4 17.44 4.79 19.7 6.13 21.58L4 29L11.09 26.03C12.94 26.65 14.92 27 17 27C23.63 27 29 21.63 29 15C29 8.37 23.63 3 17 3H16ZM16 25C14.18 25 12.46 24.61 10.91 23.91L10.5 23.72L7.05 25.1L8.4 21.56L8.13 21.14C6.89 19.37 6.2 17.25 6.2 15C6.2 9.48 10.48 5.2 16 5.2C21.52 5.2 25.8 9.48 25.8 15C25.8 20.52 21.52 24.8 16 24.8V25Z"
          fill="#25D366"
        />
        <path 
          d="M21.54 18.71L19.79 17.78C19.55 17.66 19.28 17.69 19.08 17.85L18.21 18.61C16.38 17.72 15.04 16.37 14.15 14.54L14.91 13.67C15.1 13.47 15.13 13.2 15.01 12.96L14.08 11.21C13.91 10.87 13.49 10.75 13.16 10.91C11.97 11.45 11.2 12.47 11.2 13.6C11.2 13.73 11.22 13.86 11.24 14C11.82 17.68 14.79 20.65 18.47 21.23C18.61 21.25 18.74 21.27 18.87 21.27C20 21.27 21.02 20.5 21.56 19.31C21.72 18.97 21.6 18.55 21.26 18.39L21.54 18.71Z"
          fill="#25D366"
        />
      </svg>
      

      ),
      contact: "+91 8750518844",
      href: "https://wa.me/918750518844?text=Hello%20I%20am%20interested%20in%20your%20services"
    },
    {
      title: "UAE Phone",
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.92H8C4 3.92 2 5.92 2 9.92V15.92C2 19.92 4 21.92 8 21.92H16C20 21.92 22 19.92 22 15.92V9.92C22 5.92 20 3.92 16 3.92Z" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 7.92H15" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 7.92H11" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 11.92H13" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      contact: "+971 58 586 8470",
      href: "tel:+971585868470"
    },

    
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      const response = await axios.post('https://your-api-endpoint.com/schedule-call', {
        ...formData,
        selectedOption
      });
      
      if (response.data.success) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          purpose: 'General Inquiry',
          message: ''
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error scheduling call:', error);
      setSubmissionStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const buttonHover = {
    scale: 1.03,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  };

  const buttonTap = {
    scale: 0.98
  };

  const baseStyles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      color: '#2d3748'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '10px',
      textAlign: 'center',
      color: '#b73235'
    },
    subheading: {
      fontSize: '1.1rem',
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto 40px',
      color: '#4a5568',
      lineHeight: '1.6'
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '60px'
    },
    sectionHeading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#2d3748'
    },
    optionCard: {
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    selectedOptionCard: {
      border: '2px solid #4299e1',
      backgroundColor: '#ebf8ff'
    },
    durationBadge: {
      backgroundColor: '#b73235',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '500'
    },
    availabilityCard: {
      backgroundColor: '#f7fafc',
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #e2e8f0'
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      border: '1px solid #e2e8f0'
    },
    inputField: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '1rem',
      transition: 'all 0.3s ease'
    },
    contactIcon: {
      width: '60px',
      height: '60px',
      backgroundColor: '#ebf8ff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 15px'
    }
  };

  return (
    <>
    <Helmet>
  <title>Schedule a Call - U-Link It Us | Book Your Free Consultation</title>
  <meta
    name="description"
    content="Book a free consultation call with our experts at U-Link It Us. Let's discuss how we can optimize your IT, e-commerce, and procurement strategies."
  />
</Helmet>

   
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="schedule-page"
      style={baseStyles.container}
    >

<motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
  style={{
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#f7fafc",
    border: "1px solid #e2e8f0",
    textAlign: "center",
    margin: "1rem",
  }}
>
  <h1 style={{ ...baseStyles.heading, color: "#b73235" }}>
    📅 Schedule a Call – Coming Soon!
  </h1>
  <p style={{ ...baseStyles.subheading, color: "#4a5568" }}>
    We’re working on something exciting! Soon, you’ll be able to schedule calls directly with our team.
    Stay tuned for updates.
  </p>

  {/* Scroll hint */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    style={{
      marginTop: "2rem",
      color: "#2b6cb0",
      fontWeight: "500",
      cursor: "pointer",
      fontSize: "1rem",
    }}
  >
    👇 Scroll down to contact us now
  </motion.div>
</motion.div>



      <div style={baseStyles.gridContainer}>
        <motion.div variants={itemVariants}>
          <h2 style={baseStyles.sectionHeading}>Available Time Slots</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '500',
              marginBottom: '15px',
              color: '#4a5568'
            }}>
              Select Call Duration
            </h3>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              {callOptions.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedOption(option)}
                  style={{
                    ...baseStyles.optionCard,
                    ...(selectedOption?.title === option.title ? baseStyles.selectedOptionCard : {})
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#2d3748'
                    }}>
                      {option.title}
                    </h4>
                    <span style={baseStyles.durationBadge}>
                      {option.duration}
                    </span>
                  </div>
                  <p style={{
                    color: '#718096',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {option.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
  <h3 style={{
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '15px',
    color: '#4a5568'
  }}>
    Our Availability
  </h3>

  <div style={baseStyles.availabilityCard}>
    
    {/* Working Days */}
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '15px',
      gap: '12px'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebf8ff',
        borderRadius: '50%',
        flexShrink: 0
      }}>
        {/* Calendar Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4Z" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2V6" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 2V6" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10H21" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '3px',
          color: '#2d3748'
        }}>
          Working Days
        </h4>
        <p style={{
          color: '#718096',
          fontSize: '0.9rem'
        }}>
          Monday - Saturday
        </p>
      </div>
    </div>

    {/* Working Hours */}
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebf8ff',
        borderRadius: '50%',
        flexShrink: 0
      }}>
        {/* Clock Icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h4 style={{
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '3px',
          color: '#2d3748'
        }}>
          Working Hours
        </h4>
        <p style={{
          color: '#718096',
          fontSize: '0.9rem'
        }}>
          9:00 AM - 7:00 PM (GMT+4)
        </p>
      </div>
    </div>

  </div>
</div>

        </motion.div>

        <motion.div variants={itemVariants}>
          {submissionStatus === 'success' ? (
            <div style={{
              backgroundColor: '#f0fff4',
              padding: '40px',
              borderRadius: '10px',
              border: '1px solid #c6f6d5',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#c6f6d5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#38a169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#2f855a'
              }}>
                Call Scheduled Successfully!
              </h3>
              <p style={{
                color: '#4a5568',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                Thank you for scheduling a call with us. We've sent a confirmation to {formData.email}. 
                Our team will contact you at the scheduled time.
              </p>
              <motion.button
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => setSubmissionStatus(null)}
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#38a169',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                Schedule Another Call
              </motion.button>
            </div>
          ) : submissionStatus === 'error' ? (
            <div style={{
              backgroundColor: '#fff5f5',
              padding: '40px',
              borderRadius: '10px',
              border: '1px solid #fed7d7',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#fed7d7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '15px',
                color: '#c53030'
              }}>
                Scheduling Failed
              </h3>
              <p style={{
                color: '#4a5568',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                We encountered an issue while scheduling your call. Please try again or contact us directly.
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px'
              }}>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={() => setSubmissionStatus(null)}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                >
                  Try Again
                </motion.button>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  onClick={() => window.location.href = 'mailto:dhiraj@ulinkit.com'}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: 'transparent',
                    color: '#e53e3e',
                    border: '1px solid #e53e3e',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                >
                  Email Us
                </motion.button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={baseStyles.formContainer}>
              <h2 style={baseStyles.sectionHeading}>Schedule Your Call</h2>
              
              {selectedOption && (
                <div style={{
                  backgroundColor: '#ebf8ff',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  border: '1px solid #bee3f8'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#2b6cb0',
                        marginBottom: '5px'
                      }}>
                        {selectedOption.title}
                      </h4>
                      <p style={{
                        color: '#4a5568',
                        fontSize: '0.9rem'
                      }}>
                        {selectedOption.duration} • {selectedOption.description}
                      </p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setSelectedOption(null)}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#3182ce',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      Change
                    </button>
                  </div>
                </div>
              )}
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#4a5568',
                  fontSize: '0.95rem'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={baseStyles.inputField}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#4a5568',
                  fontSize: '0.95rem'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={baseStyles.inputField}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="phone" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#4a5568',
                  fontSize: '0.95rem'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={baseStyles.inputField}
                />
              </div>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div>
                  <label htmlFor="date" style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#4a5568',
                    fontSize: '0.95rem'
                  }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    style={baseStyles.inputField}
                  />
                </div>
                
                <div>
                  <label htmlFor="time" style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500',
                    color: '#4a5568',
                    fontSize: '0.95rem'
                  }}>
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    style={baseStyles.inputField}
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="purpose" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#4a5568',
                  fontSize: '0.95rem'
                }}>
                  Purpose of Call *
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  style={{
                    ...baseStyles.inputField,
                    appearance: 'none',
                    backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231E88E5%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.7rem top 50%',
                    backgroundSize: '0.65rem auto'
                  }}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Discussion">Project Discussion</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#4a5568',
                  fontSize: '0.95rem'
                }}>
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    ...baseStyles.inputField,
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={!selectedOption || submissionStatus === 'submitting'}
                whileHover={buttonHover}
                whileTap={buttonTap}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: !selectedOption ? '#b73235' : '#3182ce',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: !selectedOption ? 'not-allowed' : 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                {submissionStatus === 'submitting' ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.93 4.93L7.76 7.76" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.24 16.24L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.93 19.07L7.76 16.24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.24 7.76L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Scheduling...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Schedule Call
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <motion.div 
        variants={itemVariants}
        style={{
          backgroundColor: '#f8fafc',
          padding: '40px',
          borderRadius: '10px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '20px',
          color: '#b73235'
        }}>
          Need Immediate Assistance?
        </h2>
      
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
          marginTop: '30px'
        }}>
          {contactMethods.map((method, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={baseStyles.contactIcon}>
                {method.icon}
              </div>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#2d3748'
              }}>
                {method.title}
              </h4>
              <a href={method.href} style={{
                color: '#3182ce',
                fontSize: '1rem',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                {method.contact}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Schedule;