import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CustomRadioContainer = styled.label`
  position: relative;
  cursor: pointer;
  width: 100%;
  min-height: 60px;
  background: #ffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;
  box-sizing: border-box;
`;

export const RadioBtn = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(0% + 0.7rem);
`;

export const RadioButtonTitle = styled.p`
  color: #4b5563;
  font-size: 0.75rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.6rem;
`;

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #d4d9e2;
`;

export const TextContainer = styled.div``;
