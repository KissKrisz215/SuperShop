import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  min-height: 900px;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  margin-top: 1rem;
  ${"" /* display: flex; */}
  gap: 0.8rem;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  @media only screen and ${breakpoints.device.xxs} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media only screen and ${breakpoints.device.sm} {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const HeaderCategory = styled.div``;
