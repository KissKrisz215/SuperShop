import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  Container,
  HeaderContainer,
  HeaderIcon,
  HeaderTitleContainer,
  CloseButtonContainer,
  CloseButtonIcon,
  ContentContainer,
  IconImage,
  SubHeaderContainer,
  SubHeaderTitle,
} from "./MenuDropDown.styles";
import {
  setMenuDropDownOpen,
  setMenuDropDownClosed,
} from "../../../store/MenuDropDown/actions";
import { setModalBackDrop } from "../../../store/ModalBackDrop/actions";
import Icons from "../../../assets/index";
import NavbarDropDown from "../NavbarDropDown/NavbarDropDown";

const MenuDropDown = () => {
  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const MenuDropDown = useSelector((state) => state.menuDropDown);
  const ModalBackDrop = useSelector((state) => state.ModalBackDrop);

  const handleDropDown = () => {
    dispatch(setMenuDropDownClosed());
    dispatch(setModalBackDrop(false));
  };

  useEffect(() => {
    if (MenuDropDown === true) {
      dispatch(setModalBackDrop(true));
    }
  }, [MenuDropDown]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        handleDropDown();
      }
    };

    if (MenuDropDown) {
      setTimeout(() => {
        document.addEventListener("click", handleDocumentClick);
      }, 1);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [MenuDropDown]);

  const [isNavbarDropDown, setIsNavbarDropDown] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  return (
    <Container ref={cartRef} menudropdown={MenuDropDown}>
      <HeaderContainer>
        <HeaderTitleContainer>
          <HeaderIcon to={"/"}>
            <IconImage src={Icons.LogoDark2} />
          </HeaderIcon>
        </HeaderTitleContainer>
        <CloseButtonContainer onClick={() => handleDropDown()}>
          <CloseButtonIcon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </CloseButtonIcon>
        </CloseButtonContainer>
      </HeaderContainer>
      <SubHeaderContainer>
        <SubHeaderTitle>All Categories</SubHeaderTitle>
      </SubHeaderContainer>
      <ContentContainer>
        <NavbarDropDown
          setIsNavbarDropDown={true}
          setActiveDropDown={setActiveDropDown}
          activeDropDown={activeDropDown}
          position={"static"}
          boxShadow={"none"}
          border={"none"}
          width={"100%"}
          gap={"0.45rem"}
        />
      </ContentContainer>
    </Container>
  );
};

export default MenuDropDown;
