import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; // For animations (install: npm install framer-motion)
import { Helmet } from 'react-helmet';
const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      // Replace with your backend endpoint
      const response = await axios.post('https://your-backend-api.com/send-email', formData);
      
      if (response.data.success) {
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setFormVisible(false);
          setSubmissionStatus(null);
        }, 3000);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonHover = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <>
    <Helmet>
  <title>Contact Us - U-Link It Us | Let's Connect</title>
  <meta
    name="description"
    content="Get in touch with U-Link It Us for expert guidance in IT, e-commerce, and procurement solutions. We're here to help your business grow."
  />
</Helmet>

    <div className="contact-page" style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          color: '#b73235', // Last color overrides the previous one
          fontSize: '2.5rem',
          fontWeight: '600',
          borderBottom: '3px solid #b73235' // You can adjust thickness and color here
        }}
        
      >
        Contact Us
      </motion.h1>
      
      <AnimatePresence>
        {!formVisible ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ textAlign: 'center', padding: '30px 0' }}
          >
            <p style={{ 
              marginBottom: '30px',
              color: '#555',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Have questions or want to get in touch? We'd love to hear from you. 
              Our team is ready to assist you with any inquiries.
            </p>
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              onClick={() => setFormVisible(true)}
              style={{
                padding: '12px 30px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 6px rgba(52, 152, 219, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <span>Let's Connect →</span>
              ) : (
                <span>Open Contact Form</span>
              )}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="contact-form" 
            style={{ 
              backgroundColor: 'white', 
              padding: '40px', 
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
              marginBottom: '40px'
            }}
          >
            {submissionStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ 
                  textAlign: 'center', 
                  padding: '40px 20px'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#e8f5e9',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: '#4CAF50',
                  fontSize: '1.5rem',
                  marginBottom: '10px'
                }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ 
                  color: '#555',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : submissionStatus === 'error' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ 
                  textAlign: 'center', 
                  padding: '40px 20px'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ffebee',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ 
                  color: '#F44336',
                  fontSize: '1.5rem',
                  marginBottom: '10px'
                }}>
                  Submission Error
                </h3>
                <p style={{ 
                  color: '#555',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  We encountered an issue while sending your message. Please try again or contact us through alternative methods.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    onClick={() => setSubmissionStatus(null)}
                    style={{
                      padding: '10px 25px',
                      backgroundColor: '#F44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    Try Again
                  </motion.button>
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    onClick={() => setFormVisible(false)}
                    style={{
                      padding: '10px 25px',
                      backgroundColor: 'transparent',
                      color: '#555',
                      border: '1px solid #ddd',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <>
                <h2 style={{ 
                  marginBottom: '30px', 
                  textAlign: 'center',
                  color: '#2c3e50',
                  fontSize: '1.8rem',
                  fontWeight: '500'
                }}>
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ 
                    marginBottom: '25px',
                    position: 'relative'
                  }}>
                    <label htmlFor="name" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontWeight: '500',
                      color: '#555',
                      fontSize: '0.95rem'
                    }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3498db'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  
                  <div style={{ 
                    marginBottom: '25px',
                    position: 'relative'
                  }}>
                    <label htmlFor="email" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontWeight: '500',
                      color: '#555',
                      fontSize: '0.95rem'
                    }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3498db'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  
                  <div style={{ 
                    marginBottom: '25px',
                    position: 'relative'
                  }}>
                    <label htmlFor="subject" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontWeight: '500',
                      color: '#555',
                      fontSize: '0.95rem'
                    }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3498db'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    />
                  </div>
                  
                  <div style={{ 
                    marginBottom: '30px',
                    position: 'relative'
                  }}>
                    <label htmlFor="message" style={{ 
                      display: 'block', 
                      marginBottom: '8px', 
                      fontWeight: '500',
                      color: '#555',
                      fontSize: '0.95rem'
                    }}>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        minHeight: '150px'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3498db'}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                    ></textarea>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <motion.button
                      type="button"
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                      onClick={() => setFormVisible(false)}
                      style={{
                        padding: '12px 25px',
                        backgroundColor: 'transparent',
                        color: '#555',
                        border: '1px solid #e0e0e0',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Cancel
                    </motion.button>
                    
                    <motion.button
                      type="submit"
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                      disabled={submissionStatus === 'submitting'}
                      style={{
                        padding: '12px 30px',
                        backgroundColor: submissionStatus === 'submitting' ? '#95a5a6' : '#2ecc71',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: submissionStatus === 'submitting' ? 'not-allowed' : 'pointer',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {submissionStatus === 'submitting' ? (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.93 4.93L7.76 7.76" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.24 16.24L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.93 19.07L7.76 16.24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.24 7.76L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ 
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <h3 style={{ 
          color: '#2c3e50',
          fontSize: '1.5rem',
          marginBottom: '25px',
          fontWeight: '500'
        }}>
          Other Ways to Reach Us
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#e3f2fd',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 style={{ 
              color: '#2c3e50',
              fontSize: '1.1rem',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Email
            </h4>
            <a
  href={`mailto:dhiraj@ulinkit.com?subject=Let's%20Connect%20–%20Regarding%20Your%20Services&body=Hi%20Dhiraj,%0A%0AI%20came%20across%20your%20services%20and%20I’d%20like%20to%20learn%20more%20about%20how%20we%20can%20work%20together.%20Please%20let%20me%20know%20a%20convenient%20time%20for%20a%20call.%0A%0ABest%20regards,%0A[Your%20Name]`}
  style={{
    color: '#555',
    fontSize: '1rem',
    textDecoration: 'none',
  }}
>
  dhiraj@ulinkit.com
</a>

          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#e8f5e9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.92H8C4 3.92 2 5.92 2 9.92V15.92C2 19.92 4 21.92 8 21.92H16C20 21.92 22 19.92 22 15.92V9.92C22 5.92 20 3.92 16 3.92Z" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 7.92H15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 7.92H11" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 11.92H13" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 style={{ 
              color: '#2c3e50',
              fontSize: '1.1rem',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Phone
            </h4>
            <a
  href="tel:+971585868470"
  style={{
    color: '#555',
    fontSize: '1rem',
    textDecoration: 'none',
  }}
>
  +971 58 586 8470
</a>
<br />
<a
  href="tel:+918750518844"
  style={{
    color: '#555',
    fontSize: '1rem',
    textDecoration: 'none',
  }}
>
  +91 8750518844
</a>

          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#fff3e0',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px'
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 style={{ 
              color: '#2c3e50',
              fontSize: '1.1rem',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              Office
            </h4>
            <p style={{ 
              color: '#555',
              fontSize: '1rem'
            }}>
             f-47 Milap Nagar Uttam Nagar <br />
             New Delhi-110059

            </p>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;