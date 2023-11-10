import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 40%;
  display: none;
  border: 2px solid #f97316;
  transition: border-color 0.18s ease-in-out;
  border-radius: 0.2rem;
  &:hover {
    border: 2px solid ${(props) => props.theme.emeraldGreen};
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  font-size: 0.75rem;
  padding: 0.5rem 0rem;
  text-align: center;
  background-color: ${(props) => props.theme.orange};
  width: 100%;
`;

export const CouponCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1.1rem;
  width: 100%;
  background: #f9fafb;
  padding: 0rem 1rem;
  box-sizing: border-box; /* Include padding within the specified width */
`;
