import React from "react";
import { nanoid } from "nanoid";
import HeaderItem from "../../components/Header/HeaderItem";
import {
  Container,
  HeaderContainer,
  TextContainer,
  ImagesContainer,
  Title,
  Description,
  Image,
  TextCardContainer,
  TextCardWrapper,
  TextCardTitle,
  TextCardDescription,
  TextCardSubTitle,
  TextDescriptionContainer,
  TextDescription,
  BannerImage,
  BannerContainer,
  TeamContainer,
  TeamHeader,
  TeamDescription,
  TeamWrapper,
  TeamMemberCard,
  TeamMembersContainer,
  TeamMemberTitle,
  TeamMemberName,
  TeamMemberImg,
} from "./AboutUs.styles";
import Icons from "../../assets";

const textCards = [
  {
    title: "Lovely Customer",
    subHeader: "8k",
    description: "Competently productize virtual models without performance.",
  },
  {
    title: "Listed Products",
    subHeader: "10K",
    description: "Dynamically morph team driven partnerships after vertical",
  },
];

export const teamMembers = [
  {
    name: "Niamh Shea",
    title: "Co-founder & Executive",
    profileImg: Icons.LogoTeam1,
  },
  {
    name: "Orla Dwyer",
    title: "Chief Executive",
    profileImg: Icons.LogoTeam2,
  },
  {
    name: "Danien James",
    title: "Co-founder, Chairman",
    profileImg: Icons.LogoTeam3,
  },
  {
    name: "Dara Frazier",
    title: "Chief Strategy Officer",
    profileImg: Icons.LogoTeam4,
  },
  {
    name: "Glenda Arvidson",
    title: "HR Officer",
    profileImg: Icons.LogoTeam5,
  },
  {
    name: "Melvin Davis",
    title: "Lead Developer",
    profileImg: Icons.LogoTeam6,
  },
];

const AboutUs = () => {
  return (
    <HeaderItem title={"About Us"}>
      <Container>
        <HeaderContainer>
          <TextContainer>
            <Title>Welcome to our KachaBazar shop</Title>
            <Description>
              Holisticly seize parallel metrics and functional ROI.Seamlessly
              revolutionize error-free internal or organic sources before
              effective scenarios. Progressively incentivize state of the art
              applications for efficient intellectual capital. Credibly leverage
              existing distinctive mindshare through cutting-edge schemas.
              Proactively procrastinate team building paradigms coordinate
              client-centric total transparent internal. Dynamically embrace
              diverse customer service and installed base paradigms. Credibly
              seize enterprise-wide experiences for end-to-end data.
              Professionally brand flexible alignments and cost effective
              architectures. Enthusiastically incentivize seamless communities
              with seamlessly facilitate revolutionary metrics with strategic
              theme areas.
            </Description>
            <TextCardWrapper>
              {textCards &&
                textCards.map((card) => (
                  <TextCardContainer key={nanoid()}>
                    <TextCardTitle>{card.subHeader}</TextCardTitle>
                    <TextCardSubTitle>{card.title}</TextCardSubTitle>
                    <TextCardDescription>
                      {card.description}
                    </TextCardDescription>
                  </TextCardContainer>
                ))}
            </TextCardWrapper>
          </TextContainer>
          <ImagesContainer>
            <Image alt="About Logo" src={Icons.AboutLogo} />
          </ImagesContainer>
        </HeaderContainer>
        <TextDescriptionContainer>
          <TextDescription>
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or organic sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal. Energistically
            reconceptualize global leadership for high-quality networks.
            Credibly restore an expanded array of systems rather than accurate
            results. Collaboratively synergize backend bandwidth without 24/7
            functionalities. Credibly utilize proactive ideas whereas
            cross-media core competencies. Uniquely maximize professional best
            practices through resource maximizing services. Conveniently
            architect cross-unit web services for e-business imperatives.
          </TextDescription>
          <TextDescription>
            Appropriately visualize market-driven data before one-to-one
            scenarios. Collaboratively productize multifunctional ROI through
            intuitive supply chains. Enthusiastically seize revolutionary value
            and process-centric services. Competently harness intuitive
            information after interoperable markets. Interactively revolutionize
            future-proof value before granular sources. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
            Professionally brand flexible alignments and cost effective
            architectures. Enthusiastically incentivize seamless communities
            with seamlessly facilitate revolutionary metrics with strategic
            theme areas.
          </TextDescription>
        </TextDescriptionContainer>
        <BannerContainer>
          <BannerImage alt="About Logo" src={Icons.AboutBanner} />
        </BannerContainer>
      </Container>
      <TeamWrapper>
        <TeamContainer>
          <TeamHeader>Our Team</TeamHeader>
          <TeamDescription>
            We’re impartial and independent, and every day we create
            distinctive, world-class reintermediate backend supply programmes.
          </TeamDescription>
          <TeamMembersContainer>
            {teamMembers &&
              teamMembers.map((item) => (
                <TeamMemberCard key={nanoid()}>
                  <TeamMemberImg
                    alt={`${item.name} Profile`}
                    src={item.profileImg}
                  />
                  <TeamMemberName>{item.name}</TeamMemberName>
                  <TeamMemberTitle>{item.title}</TeamMemberTitle>
                </TeamMemberCard>
              ))}
          </TeamMembersContainer>
        </TeamContainer>
      </TeamWrapper>
    </HeaderItem>
  );
};

export default AboutUs;
