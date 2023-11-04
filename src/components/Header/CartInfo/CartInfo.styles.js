import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  ${"" /* width: 90px; */}
  min-width:90px;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  background: ${(props) => props.theme.gray};
  border-radius: 0.3rem 0rem 0rem;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.green};
  color: #ffff;
  padding: 0.5rem 0rem;
  border-radius: 0rem 0rem 0rem 0.3rem;
`;

export const IconContainer = styled.div`
  color: ${(props) => props.theme.darkGreen};
`;

export const Title = styled.p`
  font-size: 0.7rem;
`;

export const Text = styled.p`
  font-size: 0.75rem;
`;
