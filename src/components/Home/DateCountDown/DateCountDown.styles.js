import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 0.5rem;
`;

export const TimeContainer = styled.div`
  background-color: ${(props) =>
    props.isExpired ? props.theme.red : props.theme.emeraldGreen};
  color: #ffff;
  padding: 0.2rem 0.4rem;
  border-radius: 0.3rem;
  font-size: 0.7rem;
  font-weight: 600;
`;
