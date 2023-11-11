import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Wrapper = styled.div`
  background-color: #f9fafb;
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0rem;
`;

export const Title = styled.h4`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  @media only screen and ${breakpoints.device.sm} {
    font-size: 1.2rem;
  }
`;

export const Description = styled.p`
  margin-top: 0.65rem;
  text-align: center;
  max-width: 600px;
  font-size: 0.8rem;
  color: #4b5563;
  @media only screen and ${breakpoints.device.sm} {
    max-width: 450px;
  }
`;
