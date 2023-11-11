import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  align-items: center;
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
  padding: 2rem 0rem;
  box-sizing: border-box;
`;

export const FooterInfoWrapper = styled.div`
  min-height: 85px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
    0 -2px 6px rgba(255, 255, 255, 0.8) inset;
  display: none;
  @media only screen and ${breakpoints.device.sm} {
    display: flex;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  max-width: 1250px;
  gap: 1.5rem;
  width: 90%;
  @media only screen and ${breakpoints.device.lg} {
    gap: 2.3rem;
    width: 100%;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border-right: 1px solid #e5e7eb;
  padding: 0.3rem 0rem;
`;

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.75rem;
  color: ${(props) => props.theme.emeraldGreen};
`;

export const FooterLinksContainer = styled.div`
  padding: 0rem 1.5rem;
  text-align: center;
  max-width: 1450px;
  width: 100%;
  display: grid;
  gap: 1rem;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const FooterLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3.5rem 0rem;
`;

export const AddressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddressLogo = styled.img`
  width: 100%;
  max-width: 120px;
  margin-bottom: 1rem;
`;

export const AddressText = styled.p`
  max-width: 300px;
  font-size: 0.7rem;
  color: #4b5563;
`;

export const PhoneText = styled.p`
  color: #4b5563;
  font-size: 0.7rem;
`;

export const EmailText = styled.p`
  color: #4b5563;
  font-size: 0.7rem;
`;
