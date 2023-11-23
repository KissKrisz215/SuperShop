import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 130px;
  background-image: ${(props) =>
    props.background ? `url(${props.background})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and ${breakpoints.device.xs} {
    min-height: 190px;
  }
`;

export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  @media only screen and ${breakpoints.device.xs} {
    font-size: 1.7rem;
  }
`;
