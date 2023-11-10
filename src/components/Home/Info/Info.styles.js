import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 500px;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 95%;
  margin-top: 1rem;
  @media only screen and ${breakpoint.device.sm} {
    width: 90%;
  }
`;

export const InfoItemsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 75%;
  gap: 1.5rem;
`;
