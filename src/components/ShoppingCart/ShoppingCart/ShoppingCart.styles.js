import styled from "styled-components";

export const Container = styled.div``;

export const CartIcon = styled.div`
  color: #ffff;
  cursor: pointer;
  display: flex;
  position: relative;
`;

export const NumberContainer = styled.div`
  background: ${(props) => props.theme.red};
  font-size: 0.5rem;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  top: calc(0% - 0.5rem);
  right: calc(0% - 0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
