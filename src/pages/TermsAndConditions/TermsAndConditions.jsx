import React from "react";
import HeaderItem from "../../components/Header/HeaderItem";
import {
  Container,
  Title,
  Description,
  TextContainer,
  List,
  ListItem,
} from "./TermsAndConditions.styles";

const TermsAndConditions = () => {
  return (
    <HeaderItem title={"Terms & Conditions"}>
      <Container>
        <TextContainer>
          <Title>Welcome to KachaBazar!</Title>
          <Description>
            These terms and conditions outline the rules and regulations for the
            use of KachaBazar's Website, located at https://kachabazar.com/. By
            accessing this website we assume you accept these terms and
            conditions. Do not continue to use KachaBazar if you do not agree to
            take all of the terms and conditions stated on this page.
          </Description>
          <Description>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements: Client,
            You and Your refers to you, the person log on this website and
            compliant to the Company’s terms and conditions. The Company, refers
            to our CompanyPartParties or Us refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </Description>
        </TextContainer>
        <TextContainer>
          <Title>Cookies</Title>
          <Description>
            We employ the use of cookies. By accessing KachaBazar, you agreed to
            use cookies in agreement with the KachaBazar's Privacy Policy. Most
            interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </Description>
        </TextContainer>
        <TextContainer>
          <Title>License</Title>
          <Description>
            Unless otherwise stated, KachaBazar and/or its licensors own the
            intellectual property rights for all material on KachaBazar. All
            intellectual property rights are reserved. You may access this from
            KachaBazar for your own personal use subjected to restrictions set
            in these terms and conditions.This Agreement shall begin on the date
            hereof. Our Terms and Conditions were created with the help of the
            Terms And Conditions Generator.You must not:
          </Description>
          <List>
            <ListItem>
              Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
            </ListItem>
            <ListItem>
              Characteristics of protected classifications (e.g. gender, age)
            </ListItem>
            <ListItem>
              Commercial information (e.g. products or services purchased,
              purchase history)
            </ListItem>
            <ListItem>
              Internet or other electronic network activity (e.g. browse or
              search history)
            </ListItem>
            <ListItem>Geo location data (e.g. latitude or longitude)</ListItem>
            <ListItem>
              Audio, electronic, visual, or similar information (e.g. recording
              of Guest service calls)
            </ListItem>
            <ListItem>
              Inferences drawn from any of the above (e.g. preferences or
              characteristics)
            </ListItem>
          </List>
          <Description>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            KachaBazar does not filter, edit, publish or review Comments prior
            to their presence on the website. Comments do not reflect the views
            and opinions of KachaBazar,its agents and/or affiliates. Comments
            reflect the views and opinions of the person who post their views
            and opinions. To the extent permitted by applicable laws, KachaBazar
            shall not be liable for the Comments or for any liability, damages
            or expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </Description>
        </TextContainer>
        <TextContainer>
          <Title>Content Liability</Title>
          <Description>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.Without prior approval
            and written permission, you may not create frames around our
            Webpages that alter in any way the visual presentation or appearance
            of our Website.
          </Description>
        </TextContainer>
        <TextContainer>
          <Title>Your Privacy</Title>
          <Description>Please read Privacy Policy</Description>
        </TextContainer>
        <TextContainer>
          <Title>Reservation of Rights</Title>
          <Description>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </Description>
          <Description>
            KachaBazar's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers' respective websites.
          </Description>
        </TextContainer>
        <TextContainer>
          <Title>Disclaimer</Title>
          <Description>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </Description>

          <List>
            <ListItem>
              limit or exclude our or your liability for death or personal
              injury;
            </ListItem>
            <ListItem>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </ListItem>
            <ListItem>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </ListItem>
            <ListItem>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </ListItem>
          </List>

          <Description>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty. As long as the website and the
            information and services on the website are provided free of charge,
            we will not be liable for any loss or damage of any nature.
          </Description>
        </TextContainer>
      </Container>
    </HeaderItem>
  );
};

export default TermsAndConditions;
