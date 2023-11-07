import styled from "styled-components";
import breakpoint from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
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
