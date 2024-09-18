import React, { useEffect } from "react";
import { Card, Container, Image, TextContainer } from "./Company.styles";
import Button from "../../Button";
import logistics from "../../../images/home/logistics.png";
import packaging from "../../../images/home/packaging.png";
import warehousing from "../../../images/home/warehousing.png";
import brand from "../../../images/home/brand.png";

const cardData = [
  {
    id: 1,
    title: "Warehousing",
    description:
      "Worried about storing your products in countries where you don’t have a local presence? Store Sure Warehouse can provide secure and reliable warehousing services across Turkey. As a trusted warehousing partner, we facilitate the safe storage of your goods, ensuring they are readily available for distribution whenever needed. With our strategically located facilities, we handle all aspects of your storage needs, from inventory management to final dispatch, so you can focus on growing your business without the stress of managing storage logistics.",
    imageUrl: warehousing,
    buttonText: "Coming soon",
    btn: true,
  },
  {
    id: 2,
    title: "Logistics & Shipping Services",
    description:
      "Concerned about handling logistics and shipping in regions where you lack infrastructure? Store Sure Warehouse can manage all your logistics and shipping needs across Turkey. As an experienced logistics service provider, we ensure seamless transportation of your goods, from the point of origin to the final destination. Our comprehensive logistics solutions include everything from transportation management to tracking and delivery, ensuring that your products arrive on time, every time, without involving the end-user.",
    imageUrl: logistics,
    buttonText: "Inquire Now",
    btn: true,
  },
  {
    id: 3,
    title: "Labeling and Packaging Services",
    description:
      "Worried about labeling and packaging your products to meet local regulations? Store Sure Warehouse offers expert labeling and packaging services in Turkey. We ensure that your products are packaged securely and labeled according to local standards, so they are ready for market distribution. Our services include everything from design consultation to the final packaging, making sure your products stand out while complying with all necessary requirements, allowing you to focus on market expansion without any concerns about compliance.",
    imageUrl: packaging,
    buttonText: "Inquire Now",
    btn: true,
  },
  {
    id: 4,
    title: "Brand Building Services",
    description:
      "Concerned about building your brand in a new market? Store Sure Warehouse can help you establish and grow your brand in Turkey. As a full-service provider, we offer brand building services that include market analysis, strategy development, and execution to ensure your brand resonates with local consumers. Whether you’re launching a new product or expanding an existing brand, we take full responsibility for positioning your brand in the market, leaving you free to focus on innovation and growth.",
    imageUrl: brand,
    buttonText: "Inquire Now",
    btn: true,
  },
];

const CompanyService = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.5, // Trigger callback when 50% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
        // else {
        //   entry.target.classList.remove('in-view');
        // }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <Container>
      {cardData.map((card, index) => (
        <Card key={card.id} reverse={index % 2 !== 0} className="section">
          <div className="imgs">
            <Image src={card.imageUrl} alt={card.title} />
          </div>
          <TextContainer>
            <strong className="heading"><span className="colored">{card.title}</span> </strong>
            <p>{card.description}</p>
            {card.btn && (
              <Button type="primary" width="166px">
                {card.buttonText}
              </Button>
            )}
          </TextContainer>
        </Card>
      ))}
    </Container>
  );
};

export default CompanyService;
