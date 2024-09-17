import React, { useEffect } from "react";
import { Card, Container, Image, TextContainer } from "./IntegrationApp.styles";
import Button from "../../Button";
import wooapp from "../../../images/integration/wooapp.png";
import mobapp from "../../../images/integration/mobapp.png";
import automated from "../../../images/integration/automated.png";
import shopapp from "../../../images/integration/shopapp.png";
import realtime from "../../../images/integration/realtime.png";
import apple from "../../../images/integration/apple-img.png";
import google from "../../../images/integration/google-img.png";

const cardData = [
  {
    id: 1,
    title: "Shopify Application",
    description:
      "With a strong presence in Turkey and a network of trade-licensed entities across 100 countries, Snow Blue Warehouse proudly serves the Text, Medical, Automotive, and Aviation industries.",
    imageUrl: shopapp,
    buttonText: "Coming soon",
    btn: true,
  },
  {
    id: 2,
    title: "Woo Commerce Plugin",
    description:
      "With a strong presence in Turkey and a network of trade-licensed entities across 100 countries, Snow Blue Warehouse proudly serves the Text, Medical, Automotive, and Aviation industries.",
    imageUrl: wooapp,
    buttonText: "Coming soon",
    btn: true,
  },
  {
    id: 3,
    title: "Woo Commerce Plugin",
    description:
      "With a strong presence in Turkey and a network of trade-licensed entities across 100 countries, Snow Blue Warehouse proudly serves the Text, Medical, Automotive, and Aviation industries.",
    imageUrl: mobapp,
    btnImg:true,
    btn1:apple,
    btn2:google
  },
  {
    id: 4,
    title: "Woo Commerce Plugin",
    description:
      "With a strong presence in Turkey and a network of trade-licensed entities across 100 countries, Snow Blue Warehouse proudly serves the Text, Medical, Automotive, and Aviation industries.",
    imageUrl: automated,
  },
  {
    id: 5,
    title: "Woo Commerce Plugin",
    description:
      "With a strong presence in Turkey and a network of trade-licensed entities across 100 countries, Snow Blue Warehouse proudly serves the Text, Medical, Automotive, and Aviation industries.",
    imageUrl: realtime,
  },
];

const IntegrationApp = () => {
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
            {" "}
            <Image src={card.imageUrl} alt={card.title} />
          </div>
          <TextContainer>
            <strong className="heading">{card.title}</strong>
            <p>{card.description}</p>
            {card.btn && (
              <Button type="primary" width="166px">
                {card.buttonText}
              </Button>
            )}
            {card.btnImg && (
              <div className="buttonImg">
              <img src={card.btn1} alt="apple"/>
              <img src={card.btn2} alt="google"/>
            </div>
            )}
          </TextContainer>
        </Card>
      ))}
    </Container>
  );
};

export default IntegrationApp;
