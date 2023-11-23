import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  Container,
  Indicators,
  Indicator,
  Carousel,
  CarouselContent,
  CarouselHeader,
  Header,
  Description,
  CarouselContainer,
  Button,
} from "./InfoCarousel.styles";
import Icons from "../../../assets/";

const data = [
  {
    src: Icons.Slider1,
    title: "The Best Quality Products Guaranteed!",
    description: "The Best Quality Products Guaranteed!",
  },
  {
    src: Icons.Slider3,
    title: "Quality Freshness Guaranteed!",
    description:
      "Intrinsicly fashion performance based products rather than accurate benefits...",
  },
  {
    src: Icons.Slider2,
    title: "Best Different Type of Grocery Store",
    description:
      "Quickly aggregate empowered networks after emerging products...",
  },
  {
    src: Icons.Slider1,
    title: "The Best Quality Products Guaranteed!",
    description:
      "Dramatically facilitate effective total linkage for go forward processes...",
  },
  {
    src: Icons.Slider3,
    title: "Quality Freshness Guaranteed!",
    description:
      "Intrinsicly fashion performance based products rather than accurate benefits...",
  },
];

const InfoCarousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  const autoplayDelay = 3000;

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, autoplayDelay);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [slide]);

  return (
    <Container>
      <CarouselContainer
        style={{
          display: "flex",
          transform: `translateX(-${slide * 100}%)`,
          transition: "transform 0.5s ease",
          height: "100%",
        }}
      >
        {data.map((item, index) => (
          <Carousel key={nanoid()} src={item.src}>
            <CarouselContent>
              <CarouselHeader>
                <Header>{item.title}</Header>
                <Description>{item.description}</Description>
              </CarouselHeader>
              <Button to={"/categories"}>Shop Now</Button>
            </CarouselContent>
          </Carousel>
        ))}
      </CarouselContainer>

      <Indicators>
        {data.map((item, index) => (
          <Indicator
            key={nanoid()}
            active={slide === index ? true : false}
            onClick={() => setSlide(index)}
          ></Indicator>
        ))}
      </Indicators>
    </Container>
  );
};

export default InfoCarousel;
