import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const PricingSection = () => {
  const navigate = useNavigate();
    const { t } = useTranslation(); 

  const services = [
  {
  id: t('account-management'),
  title: t("Full Account Management"),
  shortDescription: t("End-to-end management for Amazon and Noon accounts"),
  fullDescription: t(
    "Our comprehensive account management service handles all aspects of your Amazon and Noon seller accounts. We provide daily monitoring, listing optimization, inventory management, and performance tracking to maximize your sales potential."
  ),
  icon: "📊",
  priceRange: t("🇸🇦 2,500 – 4,500 SAR  |  🇦🇪 2,500 – 4,500 AED"),
  coverage: t("Up to 1,000 – 5,000 listings"),
  features: [
    t("Daily monitoring and optimization"),
    t("Listing management (up to 5,000 SKUs)"),
    t("Inventory and order management"),
    t("Performance metrics tracking"),
    t("Account health maintenance"),
    t("Competitor analysis"),
    t("Advertising campaign oversight")
  ],
  cta: t("Optimize My Account")
}
,
    {
      id: t('vendor-central'),
      title: t("Amazon Vendor Central Management"),
      shortDescription: t("Professional B2B management for Vendor Central"),
      fullDescription: t("Maximize your Amazon Vendor Central potential with our expert B2B management services. We handle purchase orders, inventory forecasting, and vendor performance to ensure optimal results."),
      icon: "🏢",
      priceRange: t("2,500 - 5,000 SAR/AED"),
      coverage: t("Monthly comprehensive management"),
      features: [
        t("B2B account setup and configuration"),
        t("Purchase order management"),
        t("Vendor Central optimization"),
        t("Dispute resolution"),
        t("Performance analytics"),
        t("Inventory forecasting"),
        t("Retail readiness management")
      ],
      cta: t("Manage My Vendor Account")
    },
    {
      id: t('aplus-content'),
      title: t("A+ Content & Enhanced Brand Content"),
      shortDescription: t("Premium product page enhancements"),
      fullDescription: t("Transform your product pages with professionally designed A+ Content that tells your brand story and significantly boosts conversion rates."),
      icon: "✨",
      priceRange: t("500 SAR/AED"),
      coverage: t("Per ASIN"),
      features: [
        t("Professional A+ content design"),
        t("Multimedia integration (images/videos)"),
        t("Brand storytelling"),
        t("Mobile-optimized layouts"),
        t("Conversion-focused elements"),
        t("SEO-optimized content"),
        t("Competitor benchmarking")
      ],
      cta: t("Enhance My Listings")
    },
    {
      id: t('fba-storage'),
      title: t("FBA Storage Optimization"),
      shortDescription: t("Maximize your FBA storage efficiency"),
      fullDescription: t("Reduce your FBA storage fees and improve inventory performance with our expert storage optimization services."),
      icon: "📦",
      priceRange: t("1,000 SAR/AED"),
      coverage: t("Monthly optimization service"),
      features: [
        t("Inventory placement strategy"),
        t("Long-term storage avoidance"),
        t("Removal order management"),
        t("Storage fee optimization"),
        t("IPI score improvement"),
        t("Seasonal planning"),
        t("Inventory health reports")
      ],
      cta: t("Optimize My FBA Storage")
    },
    {
      id: t('logistics'),
      title: t("Logistics Solutions"),
      shortDescription: t("Custom supply chain solutions"),
      fullDescription: t("Streamline your supply chain with our tailored logistics solutions designed specifically for Amazon sellers."),
      icon: "🚚",
      priceRange: t("Custom Quote"),
      coverage: t("Tailored to your needs"),
      features: [
        t("Shipping coordination"),
        t("Customs clearance assistance"),
        t("Inventory replenishment planning"),
        t("Multi-channel fulfillment"),
        t("Freight forwarding"),
        t("Duty optimization"),
        t("Warehousing solutions")
      ],
      cta: t("Get a Logistics Quote")
    },
    {
      id: t('brand-registry'),
      title: t("Brand Registry & Approval"),
      shortDescription: t("Amazon brand registration services"),
      fullDescription: t("Protect your brand and unlock powerful selling tools by getting approved for Amazon Brand Registry."),
      icon: "🛡️",
      priceRange: t("1,500 SAR/AED"),
      coverage: t("One-time service"),
      features: [
        t("Trademark verification"),
        t("Brand registry application"),
        t("Brand protection setup"),
        t("Enhanced brand content eligibility"),
        t("Counterfeit protection"),
        t("Brand analytics access"),
        t("Sponsored Brands eligibility")
      ],
      cta: t("Register My Brand")
    },
    {
      id: t('social-media'),
      title: t("Social Media Marketing"),
      shortDescription: t("Integrated social media strategy"),
      fullDescription: t("Amplify your brand presence and drive traffic to your Amazon listings with our professional social media management."),
      icon: "📱",
      priceRange: t("2,000 SAR/AED"),
      coverage: t("Monthly management"),
      features: [
        t("Platform management (FB/IG/TikTok)"),
        t("Content creation & scheduling"),
        t("Audience engagement"),
        t("Performance analytics"),
        t("Ad campaign management"),
        t("Influencer partnerships"),
        t("Community building")
      ],
      cta: t("Boost My Social Presence")
    }
  ];
  

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };


  return (
    <PricingContainer>
      <Header>
        <SectionTitle>{t("Professional Amazon Services")}</SectionTitle>
        <SectionSubtitle>{t("Premium solutions to grow your ecommerce business")}</SectionSubtitle>
      </Header>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className="service-card"
            index={index}
          >
            <ServiceTop>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceTop>
            <ServiceContent>
              <ServiceShortDesc>{service.shortDescription}</ServiceShortDesc>
              <PriceContainer>
                <PriceLabel>{t("Starting at")}</PriceLabel>
                <PriceValue>{service.priceRange}</PriceValue>
              </PriceContainer>
              <ServiceCoverage>{service.coverage}</ServiceCoverage>
            </ServiceContent>
            <ServiceHoverOverlay>
              <HoverContent>
                <HoverTitle>{service.title}</HoverTitle>
                <HoverDivider />
                <HoverFeatures>
                  {service.features.slice(0, 3).map((feature, i) => (
                    <HoverFeature key={i}>✓ {feature}</HoverFeature>
                  ))}
                </HoverFeatures>
                <HoverPrice>{service.priceRange}</HoverPrice>
                <HoverCta>
                  {service.cta}
                  <HoverArrow>→</HoverArrow>
                </HoverCta>
              </HoverContent>
            </ServiceHoverOverlay>
            <ServiceGlow />
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <FooterNote>
        {t("* Custom packages available. Contact us for enterprise solutions.")}
      </FooterNote>
    </PricingContainer>
  );
};

// Styled Components
const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #009000;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #718096;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

// First define ServiceIcon and ServiceTitle before they're used in ServiceCard
const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  transition: transform 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  transition: color 0.3s ease;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 380px;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  z-index: 1;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 128, 0, 0.15);
    border-color: #009000;
    
    ${ServiceIcon} {
      transform: scale(1.1);
    }
    
    ${ServiceTitle} {
      color: #009000;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #009000, #66ff99);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ServiceContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceShortDesc = styled.p`
  color: #718096;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

const PriceContainer = styled.div`
  margin-bottom: 1rem;
  background: #f0fff4;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 4px solid #009000;
`;

const PriceLabel = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #009000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const PriceValue = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #009000;
`;

const ServiceCoverage = styled.div`
  font-size: 0.9rem;
  color: #4a5568;
  padding: 0.8rem 0;
  border-top: 1px dashed #e2e8f0;
  margin-top: auto;
  display: flex;
  align-items: center;
  
  &::before {
    content: '🛈';
    margin-right: 0.5rem;
    font-size: 1rem;
    color: #009000;
  }
`;

const ServiceHoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 144, 0, 0.95), rgba(102, 255, 153, 0.95));
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  transform: translateY(20px);
  z-index: 2;
  
  ${ServiceCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HoverContent = styled.div`
  transform: translateY(20px);
  transition: transform 0.4s ease;
  ${ServiceCard}:hover & {
    transform: translateY(0);
  }
`;

const HoverTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const HoverDivider = styled.div`
  height: 2px;
  width: 50px;
  background: rgba(255, 255, 255, 0.3);
  margin: 1rem 0;
`;

const HoverFeatures = styled.div`
  margin: 1rem 0;
`;

const HoverFeature = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  opacity: 0.9;
`;

const HoverPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 1.5rem 0;
`;

const HoverCta = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const HoverArrow = styled.div`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  animation: ${pulse} 1.5s infinite;
`;

const ServiceGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 144, 0, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
  
  ${ServiceCard}:hover & {
    opacity: 1;
  }
`;

const FooterNote = styled.p`
  text-align: center;
  margin-top: 4rem;
  color: #718096;
  font-size: 0.9rem;
`;

export default PricingSection;
