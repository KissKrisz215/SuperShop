import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Loading from "../../Loading/Loading/Loading";
import {
  Wrapper,
  CategoriesContainer,
  CategoryItem,
  CategoryIcon,
  CategoryHeader,
  CategoryDropDownIcon,
  CategoryContent,
  CategoryItemInnerContainer,
  SubCategoryContainer,
  SubCategoryHeader,
  LoadingContainer,
} from "./NavbarDropDown.styles";

const NavbarDropDown = ({
  activeDropDown,
  setActiveDropDown,
  setIsNavbarDropDown,
  position,
  boxShadow,
  border,
  width,
  gap,
}) => {
  const categories = useSelector((state) => state.categories.data);
  const loading = useSelector((state) => state.categories.isLoading);
  const [activeCategory, setActiveCategory] = useState(null);
  const categoryRef = useRef(null);

  const handleCategoryChange = (active) => {
    if (active === activeCategory) {
      setActiveCategory(null);
    } else if (active !== activeCategory) {
      setActiveCategory(active);
    }
  };

  const handleClickOutside = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setIsNavbarDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCategory]);

  return (
    <Wrapper
      ref={categoryRef}
      position={position}
      boxshadow={boxShadow}
      border={border}
      width={width}
    >
      <LoadingContainer>
        <Loading loading={loading} />
      </LoadingContainer>
      <CategoriesContainer gap={gap}>
        {categories &&
          categories.map((category) => (
            <CategoryItem key={nanoid()}>
              <CategoryItemInnerContainer
                to={`/categories/${category.name.en}/${category._id}`}
                onClick={() => setIsNavbarDropDown(false)}
              >
                <CategoryContent>
                  <CategoryIcon
                    alt={`${category.name.en} Category`}
                    src={category.icon}
                  />
                  <CategoryHeader>{category.name.en}</CategoryHeader>
                </CategoryContent>
              </CategoryItemInnerContainer>
              {category.children && category.children.length > 0 && (
                <CategoryDropDownIcon
                  onClick={() => handleCategoryChange(category.name.en)}
                  isActive={activeCategory}
                  categoryName={category.name.en}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="0.6em"
                    width="0.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="48"
                      d="M112 184l144 144 144-144"
                    ></path>
                  </svg>
                </CategoryDropDownIcon>
              )}
              {activeCategory === category.name.en &&
                category.children.map((item) => (
                  <SubCategoryContainer
                    onClick={() => setIsNavbarDropDown(false)}
                    to={`/categories/${item.name.en}/${item._id}`}
                    key={nanoid()}
                  >
                    <SubCategoryHeader> - {item.name.en}</SubCategoryHeader>
                  </SubCategoryContainer>
                ))}
            </CategoryItem>
          ))}
      </CategoriesContainer>
    </Wrapper>
  );
};

export default NavbarDropDown;
