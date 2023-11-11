import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #eef2ff;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  max-width: 1450px;
  width: 100%;
  min-height: 310px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoints.device.xxs} {
    min-height: 400px;
    height: 100%;
  }
  @media only screen and ${breakpoints.device.xs} {
    min-height: 490px;
    height: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ImageRight = styled.img`
  display: none;
  @media only screen and ${breakpoints.device.xs} {
    height: 250px;
    display: block;
  }
  @media only screen and ${breakpoints.device.lg} {
    height: 90%;
    max-height: 400px;
  }
`;

export const ImageLeft = styled.img`
  display: none;
  @media only screen and ${breakpoints.device.xxs} {
    display: block;
    height: 250px;
  }
  @media only screen and ${breakpoints.device.xs} {
    height: 250px;
  }
  @media only screen and ${breakpoints.device.lg} {
    height: 90%;
    max-height: 400px;
  }
`;

export const Header = styled.h5`
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  @media only screen and ${breakpoints.device.xxs} {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.3rem;
  text-align: center;
  max-width: 500px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 1.5rem;
`;

export const LinkText = styled.a``;

export const LinkImage = styled.img`
  max-width: 180px;
`;

export const LinkImageRight = styled.img``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
`;
