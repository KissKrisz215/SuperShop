import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0;
  z-index: 1000;
  display: ${(props) => (props.isLoginDropDown === true ? "block" : "none")};
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

export const DropDownBackDrop = styled.div`
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.div`
  color: ${(props) => props.theme.red};
  display: flex;
`;

export const CloseButtonContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 37px;
  height: 37px;
  background: #ffff;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #fecaca;
  }
`;
