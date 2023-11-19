import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
`;

export const Container = styled.div`
  margin: 2rem 0rem;
  max-width: 1450px;
  width: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0rem 2.5rem;
  box-sizing: border-box;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0rem 1.5rem;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  background-color: #ffff;
  border-radius: 0.3rem;
  padding: 1.7rem 1.5rem;
  @media only screen and ${breakpoints.device.sm} {
    width: 70%;
  }
`;

export const Header = styled.h5`
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
`;
