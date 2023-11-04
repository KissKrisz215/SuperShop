import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width || "96px"};
  height: ${(props) => props.height || "32px"};
  border: 1px solid ${(props) => props.theme.navbarPrimary};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #4b5563;
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

export const Label = styled.p`
  font-size: 0.7rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
