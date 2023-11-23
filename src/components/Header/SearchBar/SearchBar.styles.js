import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-contents: center;
  background-color: #ffff;
  width: 100%;
  height: 45px;
  borer: none;
  border-radius: 0.3rem;
  position: relative;
  color: ${(props) => props.theme.lightGray};
`;

export const Input = styled.input`
  border: none;
  border-radius: 0.3rem;
  padding: 0rem 0.9rem;
  font-size: 0.65rem;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: calc(0% + 0.7rem);
  transform: translateY(-50%);
  @media only screen and ${breakpoint.device.sm} {
    right: calc(0% + 1rem);
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  top: calc(100% + 0.1rem);
  width: 100%;
  max-height: 250px;
  background-color: #ffff;
  border-radius: 0.3rem;
  z-index: 100;
  overflow: scroll;
  padding: 0.5rem 0rem;
  box-sizing: border-box;
`;

export const DropDownItem = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 0.1rem 1rem;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 1px solid #f9fafb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #f9fafb;
  }
`;

export const DropDownText = styled.p`
  font-size: 0.7rem;
  padding: 0.17rem 0rem;
`;

export const ProductImage = styled.img`
  width: 35px;
  height: 35px;
`;

export const PriceContainer = styled.p`
  font-weight: 700;
  font-size: 0.62rem;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 0.85rem;
`;
