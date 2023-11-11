import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Container = styled.div`
  width: ${(props) => props.width || "96px"};
  height: ${(props) => props.height || "32px"};
  border: ${(props) => props.border || `1px solid #F3F4F6`};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || "#4b5563"};
  position: ${(props) => props.position || "absolute"};
  bottom: 0%;
  right: 0%;
  max-width: 130px;
  max-height: 45px;
  background: ${(props) => props.background || "none"};
  @media only screen and ${breakpoints.device.xxs} {
    width: ${(props) => props.width || "96px"};
    max-width: none;
    max-height: none;
  }
`;

export const Label = styled.p`
  font-size: ${(props) => props.fontSize || "0.7rem"};
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  border-left: ${(props) => props.borderLeft || "none"};
  border-right: ${(props) => props.borderRight || "none"};
  width: ${(props) => props.buttonWidth || "100%"};
  height: ${(props) => props.buttonHeight || "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
