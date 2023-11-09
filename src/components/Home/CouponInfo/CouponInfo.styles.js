import styled from "styled-components";
import breakpoint from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 30%;
  display: none;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
    width: 30%;
  }
`;
