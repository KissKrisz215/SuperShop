import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  min-height: 500px;
  max-width: 1450px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
`;

export const CouponContainer = styled.div`
  margin: 3.5rem 0rem;
  width: 85%;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Coupon = styled.div`
  min-height: 180px;
`;

export const LoadingRowsContainer = styled.div`
  height: 100%;
  width: 65%;
  margin-top: 10rem;
`;
