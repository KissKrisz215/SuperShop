import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Wrapper,
  Container,
  CategoryContainer,
  CategoryTitle,
  CategoryImage,
  InnerContainer,
  ArrowLeftButton,
  ArrowRightButton,
} from "./CategoryCarousel.styles";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowRightButton onClick={onClick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M184 112l144 144-144 144"
        ></path>
      </svg>
    </ArrowRightButton>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowLeftButton onClick={onClick} rotate={true}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M184 112l144 144-144 144"
        ></path>
      </svg>
    </ArrowLeftButton>
  );
}

const CategoryCarousel = () => {
  const categories = useSelector((state) => state.categories.data);
  const [slidesToShow, setSlidesToShow] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slidesToShow based on the window width
      if (window.innerWidth <= 600) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 972) {
        setSlidesToShow(5);
      } else if (window.innerWidth <= 1120) {
        setSlidesToShow(6);
      } else if (window.innerWidth <= 1320) {
        setSlidesToShow(8);
      } else {
        setSlidesToShow(10);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set the initial slidesToShow based on window width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper>
      <Container>
        <Slider {...settings}>
          {categories &&
            categories.map((category) => (
              <CategoryContainer
                to={`/categories/${category.name.en}/${category._id}`}
              >
                <InnerContainer>
                  <CategoryImage src={category.icon} />
                  <CategoryTitle>{category.name.en}</CategoryTitle>
                </InnerContainer>
              </CategoryContainer>
            ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default CategoryCarousel;
