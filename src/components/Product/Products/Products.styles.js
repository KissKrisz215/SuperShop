import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media only screen and ${breakpoints.device.xxs} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`;
