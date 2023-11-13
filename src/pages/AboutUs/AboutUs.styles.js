import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  gap: 2.5rem;
  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    padding: 3.5rem 1.4rem;
    gap: 0rem;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and ${breakpoints.device.sm} {
    width: 50%;
    display: block;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  @media only screen and ${breakpoints.device.sm} {
    width: 50%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Title = styled.h5`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  @media only screen and ${breakpoints.device.xs} {
    font-size: 1.4rem;
  }
`;

export const Description = styled.p`
  line-height: 1.4rem;
  font-size: 0.73rem;
  max-width: 90%;
`;

export const TextCardContainer = styled.div`
  height: 100%;
  background: #eef2ff;
  width: 100%;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 1.5rem;
  @media only screen and ${breakpoints.device.xs} {
    padding: 0rem 1.5rem;
  }
`;

export const TextCardWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 95%;
  height: 380px;
  @media only screen and ${breakpoints.device.xxs} {
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TextCardTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const TextCardDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1.3rem;
`;

export const TextCardSubTitle = styled.h5`
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
`;

export const TextDescriptionContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0rem 1.4rem;
  box-sizing: border-box;
`;

export const TextDescription = styled.p`
  font-size: 0.77rem;
  line-height: 1.2rem;
`;

export const BannerImage = styled.img`
  border-radius: 0.4rem;
  width: 100%;
`;

export const BannerContainer = styled.div`
  padding: 0rem 1.4rem;
  margin: 2.4rem 0rem;
`;

export const TeamContainer = styled.div`
  max-width: 1450px;
  width: 100%;
  padding: 0rem 1.4rem;
  box-sizing: border-box;
`;

export const TeamWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #f9fafb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.8rem 0rem;
`;

export const TeamHeader = styled.h5`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const TeamDescription = styled.p`
  font-size: 0.8rem;
  max-width: 680px;
  line-height: 1.3rem;
`;

export const TeamMemberCard = styled.div``;

export const TeamMembersContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 1.5rem;
  gap: 1.2rem;
  @media only screen and ${breakpoints.device.xs} {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const TeamMemberTitle = styled.p`
  font-size: 0.67rem;
  margin-top: 0.4rem;
`;

export const TeamMemberName = styled.p`
  font-weight: 600;
  margin-top: 0.8rem;
  font-size: 0.9rem;
`;

export const TeamMemberImg = styled.img`
  max-width: 90%;
  width: 100%;
  border-radius: 0.4rem;
  @media only screen and ${breakpoints.device.xs} {
    max-width: 210px;
  }
`;
