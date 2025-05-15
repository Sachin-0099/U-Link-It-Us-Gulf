import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

import { 
  Button, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableRow, 
  Tabs, 
  Tab,
  Chip,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('SAR'); // Default currency

  // Currency conversion rates (simplified - in a real app, fetch these from an API)
  const exchangeRates = {
    SAR: 1,
    AED: 0.98,
    USD: 0.27
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const convertPrice = (priceStr) => {
    // Extract numeric values from price string
    const numbers = priceStr.match(/\d+/g).map(Number);
    const rate = exchangeRates[currency];
    
    // Convert each number and format with currency symbol
    const converted = numbers.map(num => {
      const convertedValue = Math.round(num * rate);
      return `${convertedValue.toLocaleString()}`;
    });
    
    // Reconstruct the price string
    return `${converted.join(' - ')} ${currency}`;
  };

  // Enhanced services data with more details
  const services = [

    {
      id: 'account-management',
      title: t("Full Account Management"),
      fullDescription: t("Our comprehensive account management service provides end-to-end solutions for your Amazon and Noon seller accounts. Our team of certified experts delivers daily monitoring, strategic optimization, and performance maximization to ensure your eCommerce business operates at peak efficiency."),
      features: [
        t("24/7 account monitoring and real-time alerts"),
        t("Advanced listing optimization (title, bullet points, descriptions)"),
        t("Comprehensive inventory forecasting and management"),
        t("Detailed performance analytics with weekly reports"),
        t("Proactive account health maintenance and issue resolution"),
        t("Competitor benchmarking and gap analysis"),
        t("Advertising campaign management and optimization"),
        t("A+ Content and Enhanced Brand Content creation"),
        t("Review management and customer feedback analysis")
      ],
      pricing: {
        basic: {
          price: "2,500 SAR",
          coverage: t("Up to 1,000 listings"),
          features: [
            t("Daily monitoring"),
            t("Basic listing optimization"),
            t("Inventory alerts"),
            t("Monthly performance report")
          ]
        },
        professional: {
          price: "3,500 SAR",
          coverage: t("Up to 3,000 listings"),
          features: [
            t("All Basic features"),
            t("Advanced optimization"),
            t("Weekly performance reports"),
            t("Competitor analysis"),
            t("Advertising management")
          ]
        },
        enterprise: {
          price: "4,500 SAR",
          coverage: t("Up to 5,000 listings"),
          features: [
            t("All Professional features"),
            t("Dedicated account manager"),
            t("Daily performance reports"),
            t("Strategic business consulting"),
            t("Premium support (24/7)")
          ]
        }
      },
      serviceLevels: [
        { name: t("Response Time"), basic: "24h", professional: "12h", enterprise: "2h" },
        { name: t("Reporting Frequency"), basic: t("Monthly"), professional: t("Weekly"), enterprise: t("Daily") },
        { name: t("Support Channels"), basic: t("Email"), professional: t("Email + Chat"), enterprise: t("Email + Chat + Phone") },
        { name: t("Strategic Consultations"), basic: "-", professional: t("Quarterly"), enterprise: t("Monthly") }
      ],
      benefits: [
        t("Increase sales by 30-50% within 3-6 months"),
        t("Reduce operational costs by 20-35%"),
        t("Improve conversion rates by 15-25%"),
        t("Maintain 100% account health score"),
        t("Achieve premium seller status faster")
      ]
    },
    
    {
      id: 'vendor-central',
      title: t("Amazon Vendor Central Management"),
      fullDescription: t("Maximize your Amazon Vendor Central potential with our expert B2B management services. We handle purchase orders, inventory forecasting, and vendor performance to ensure optimal results."),
      features: [
        t("B2B account setup and configuration"),
        t("Purchase order management"),
        t("Vendor Central optimization"),
        t("Dispute resolution"),
        t("Performance analytics"),
        t("Inventory forecasting"),
        t("Retail readiness management")
      ],
      pricing: {
        basic: {
          price: "2,500 SAR",
          coverage: t("Startup & configuration"),
          features: [
            t("Vendor setup"),
            t("Initial PO management"),
            t("Performance dashboard setup")
          ]
        },
        professional: {
          price: "3,800 SAR",
          coverage: t("Monthly management"),
          features: [
            t("Ongoing PO management"),
            t("Dispute resolution"),
            t("Performance improvement actions")
          ]
        },
        enterprise: {
          price: "5,000 SAR",
          coverage: t("Full B2B operations"),
          features: [
            t("All Professional features"),
            t("Weekly vendor performance insights"),
            t("Consultation and strategy meetings")
          ]
        }
      },
      serviceLevels: [
        { name: t("Response Time"), basic: "48h", professional: "24h", enterprise: "6h" },
        { name: t("Reporting Frequency"), basic: t("Initial"), professional: t("Bi-weekly"), enterprise: t("Weekly") },
        { name: t("Support Channels"), basic: t("Email"), professional: t("Email + Chat"), enterprise: t("Full Support Suite") },
        { name: t("Vendor Strategy"), basic: "-", professional: t("Quarterly"), enterprise: t("Monthly") }
      ],
      benefits: [
        t("Stronger purchase order accuracy"),
        t("Improved vendor scorecard performance"),
        t("Fewer chargebacks and deductions"),
        t("Enhanced retail relationships with Amazon")
      ]
    },
    {
      id: 'aplus-content',
      title: t("A+ Content & Enhanced Brand Content"),
      fullDescription: t("Transform your product pages with professionally designed A+ Content that tells your brand story and significantly boosts conversion rates."),
      features: [
        t("Professional A+ content design"),
        t("Multimedia integration (images/videos)"),
        t("Brand storytelling"),
        t("Mobile-optimized layouts"),
        t("Conversion-focused elements"),
        t("SEO-optimized content"),
        t("Competitor benchmarking")
      ],
      pricing: {
        basic: {
          price: "500 SAR",
          coverage: t("Per ASIN"),
          features: [
            t("Basic layout"),
            t("Image + text"),
            t("Mobile optimization")
          ]
        },
        professional: {
          price: "800 SAR",
          coverage: t("Per ASIN"),
          features: [
            t("Multimedia integration"),
            t("SEO enhancements"),
            t("Conversion-focused sections")
          ]
        },
        enterprise: {
          price: "1,200 SAR",
          coverage: t("Per ASIN"),
          features: [
            t("Custom design"),
            t("Full brand story"),
            t("A/B testing support")
          ]
        }
      },
      serviceLevels: [],
      benefits: [
        t("Boost conversion rates by up to 20%"),
        t("Enhance mobile shopping experience"),
        t("Strengthen brand image and trust")
      ]
    },
   {
      id: 'logistics',
      title: t("Logistics Solutions"),
      fullDescription: t("Streamline your supply chain with our tailored logistics solutions designed specifically for Amazon sellers."),
      features: [
        t("Shipping coordination"),
        t("Customs clearance assistance"),
        t("Inventory replenishment planning"),
        t("Multi-channel fulfillment"),
        t("Freight forwarding"),
        t("Duty optimization"),
        t("Warehousing solutions")
      ],
      pricing: {
        custom: true,
        message: t("Contact us for a custom logistics quote tailored to your business needs.")
      },
      serviceLevels: [],
      benefits: [
        t("Faster fulfillment times"),
        t("Lower shipping costs"),
        t("Improved supply chain reliability")
      ]
    },
    {
      id: 'brand-registry',
      title: t("Brand Registry & Approval"),
      fullDescription: t("Protect your brand and unlock powerful selling tools by getting approved for Amazon Brand Registry."),
      features: [
        t("Trademark verification"),
        t("Brand registry application"),
        t("Brand protection setup"),
        t("Enhanced brand content eligibility"),
        t("Counterfeit protection"),
        t("Brand analytics access"),
        t("Sponsored Brands eligibility")
      ],
      pricing: {
        basic: {
          price: "1,500 SAR",
          coverage: t("One-time service"),
          features: [
            t("Application process handling"),
            t("Document preparation"),
            t("Post-registration setup")
          ]
        }
      },
      serviceLevels: [],
      benefits: [
        t("Protect intellectual property"),
        t("Access brand-exclusive tools"),
        t("Prevent unauthorized sellers")
      ]
    },
    {
      id: 'social-media',
      title: t("Social Media Marketing"),
      fullDescription: t("Amplify your brand presence and drive traffic to your Amazon listings with our professional social media management."),
      features: [
        t("Platform management (FB/IG/TikTok)"),
        t("Content creation & scheduling"),
        t("Audience engagement"),
        t("Performance analytics"),
        t("Ad campaign management"),
        t("Influencer partnerships"),
        t("Community building")
      ],
      pricing: {
        basic: {
          price: "2,000 SAR",
          coverage: t("Monthly management"),
          features: [
            t("1 platform"),
            t("Content planning"),
            t("Engagement tracking")
          ]
        },
        professional: {
          price: "3,500 SAR",
          coverage: t("Multi-platform"),
          features: [
            t("Ad campaign management"),
            t("Influencer collaboration"),
            t("Weekly analytics")
          ]
        }
      },
      serviceLevels: [],
      benefits: [
        t("Increased brand visibility"),
        t("Higher Amazon listing traffic"),
        t("Stronger customer engagement")
      ]
    }
    // Add other services here...
  ];

  // Find the selected service by serviceId
  const selectedService = services.find(service => service.id === serviceId);

  if (!selectedService) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h6" color="error">{t("Service not found.")}</Typography>
        <Button onClick={() => navigate(-1)} variant="outlined">{t('Back to Pricing')}</Button>
      </div>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ padding: { xs: '1rem', md: '2rem' }, maxWidth: '1200px', margin: '0 auto' }}
    >
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ marginBottom: '2rem', borderColor: '#009000', color: '#009000', '&:hover': { borderColor: '#007000', backgroundColor: 'rgba(0, 144, 0, 0.04)' } }}
      >
        {t('Back to Pricing')}
      </Button>
      
      <Paper sx={{ padding: { xs: '1rem', md: '2rem' }, borderRadius: '8px', boxShadow: 3, mb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#009000' }}>
            {selectedService.title}
          </Typography>

          <div className='flex'>
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Chip 
                onClick={() => handleCurrencyChange('SAR')} 
                color={currency === 'SAR' ? 'primary' : 'default'}
                variant={currency === 'SAR' ? 'filled' : 'outlined'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'auto',
                  padding: '5px 10px',
                  mr: 1,
                  backgroundColor: currency === 'SAR' ? '#009000' : '',
                  color: currency === 'SAR' ? 'white' : '',
                }}
                label={<Flag code="SA" style={{ width: '20px', height: '15px', marginRight: '8px' }} />}
              />
              <Chip 
                onClick={() => handleCurrencyChange('AED')} 
                color={currency === 'AED' ? 'primary' : 'default'}
                variant={currency === 'AED' ? 'filled' : 'outlined'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'auto',
                  padding: '5px 10px',
                  mr: 1,
                  backgroundColor: currency === 'AED' ? '#009000' : '',
                  color: currency === 'AED' ? 'white' : '',
                }}
                label={<Flag code="AE" style={{ width: '20px', height: '15px', marginRight: '8px' }} />}
              />
              <Chip 
                onClick={() => handleCurrencyChange('USD')} 
                color={currency === 'USD' ? 'primary' : 'default'}
                variant={currency === 'USD' ? 'filled' : 'outlined'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 'auto',
                  padding: '5px 10px',
                  backgroundColor: currency === 'USD' ? '#009000' : '',
                  color: currency === 'USD' ? 'white' : '',
                }}
                label={<Flag code="US" style={{ width: '20px', height: '15px', marginRight: '8px' }} />}
              />
            </Box>
          </div>
        </Box>
        
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
          {selectedService.fullDescription}
        </Typography>
        
        <Box mb={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: '#009000' }}>
            {t('Key Benefits')}
          </Typography>
          <List dense>
            {selectedService.benefits.map((benefit, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText 
                  primary={
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: '1rem', color: '#009000' }} />
                      {benefit}
                    </Typography>
                  } 
                />
              </ListItem>
            ))}
          </List>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: '#009000' }}>
          {t('Service Packages')}
        </Typography>
        
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableBody>
              <TableRow sx={{ backgroundColor: '#009000', '& th': { color: 'white', fontWeight: 'bold' } }}>
                <TableCell>{t('Package')}</TableCell>
                <TableCell>{t('Basic')}</TableCell>
                <TableCell>{t('Professional')}</TableCell>
                <TableCell>{t('Enterprise')}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('Price')}</TableCell>
                <TableCell>{convertPrice(selectedService.pricing.basic.price)}</TableCell>
                <TableCell>{convertPrice(selectedService.pricing.professional.price)}</TableCell>
                <TableCell>{convertPrice(selectedService.pricing.enterprise.price)}</TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>{t('Coverage')}</TableCell>
                <TableCell>{selectedService.pricing.basic.coverage}</TableCell>
                <TableCell>{selectedService.pricing.professional.coverage}</TableCell>
                <TableCell>{selectedService.pricing.enterprise.coverage}</TableCell>
              </TableRow>
              
              {selectedService.serviceLevels.map((level, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 'bold' }}>{level.name}</TableCell>
                  <TableCell>{level.basic}</TableCell>
                  <TableCell>{level.professional}</TableCell>
                  <TableCell>{level.enterprise}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: '#009000' }}>
          {t('Detailed Features')}
        </Typography>
        
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3} mb={4}>
          <Paper sx={{ p: 2, flex: 1, borderTop: '4px solid #009000' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#009000' }}>
              {t('Basic Package')}
            </Typography>
            <List dense>
              {selectedService.pricing.basic.features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
          
          <Paper sx={{ p: 2, flex: 1, borderTop: '4px solid #009000' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#009000' }}>
              {t('Professional Package')}
            </Typography>
            <List dense>
              {selectedService.pricing.professional.features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
          
          <Paper sx={{ p: 2, flex: 1, borderTop: '4px solid #009000' }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', color: '#009000' }}>
              {t('Enterprise Package')}
            </Typography>
            <List dense>
              {selectedService.pricing.enterprise.features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: '#009000' }}>
          {t('Core Features')}
        </Typography>
        
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2} mb={4}>
          {selectedService.features.map((feature, index) => (
            <Paper key={index} sx={{ p: 2 }}>
              <Box display="flex" alignItems="center">
                <CheckCircleIcon sx={{ mr: 1, color: '#009000' }} />
                <Typography variant="body1">{feature}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
        
        <Box textAlign="center" mt={4}>
          <Button 
            variant="contained" 
            size="large" 
            endIcon={<SendIcon />}
            onClick={() => navigate('/contact')}
            sx={{ 
              backgroundColor: '#009000',
              '&:hover': { backgroundColor: '#007000' }
            }}
          >
            {t('Get Started')}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ServiceDetail;