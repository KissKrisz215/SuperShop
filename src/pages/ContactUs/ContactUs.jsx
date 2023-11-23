import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import {
  faEnvelope,
  faBell,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import HeaderItem from "../../components/HeaderItem";
import {
  Container,
  HeaderContainer,
  ContactCard,
  ContactHeader,
  ContactDescription,
  ContactTextHiglighted,
  CustomFontAwesome,
  FormWrapper,
  FormImageContainer,
  FormContainer,
  FormImage,
  FormHeader,
  FormDescription,
  Form,
  NameInputContainer,
  Input,
  Label,
  TextArea,
  InputContainer,
  Button,
  ButtonContainer,
  TextAreaContainer,
  FormError,
} from "./ContactUs.styles";
import Icons from "../../assets/index";

const contactCards = [
  {
    icon: faEnvelope,
    title: "Email Us",
    description:
      "Interactively grow empowered for process-centric total linkage.",
    highlighted: "info@kachabazar.com",
    type: "email",
  },
  {
    icon: faBell,
    title: "Email Us",
    description:
      "Distinctively disseminate focused solutions clicks-and-mortar ministate.",
    highlighted: "029-00124667",
    type: "phone",
  },
  {
    icon: faLocationDot,
    title: "Location",
    description:
      "Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE. 561-4535 Nulla LA United States 96522.",
    highlighted: null,
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newFormErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      newFormErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    } else {
      setFormData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
      setFormErrors({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <HeaderItem title={"Contact Us"}>
      <Container>
        <HeaderContainer>
          {contactCards &&
            contactCards.map((item) => (
              <ContactCard key={nanoid()}>
                <CustomFontAwesome icon={item.icon} />
                <ContactHeader>{item.title}</ContactHeader>
                <ContactDescription>
                  {item.highlighted && (
                    <ContactTextHiglighted
                      href={
                        item.type === "email"
                          ? `mailto: ${item.highlighted}`
                          : `tel:${item.highlighted}`
                      }
                    >
                      {item.highlighted}
                    </ContactTextHiglighted>
                  )}
                  {item.description}
                </ContactDescription>
              </ContactCard>
            ))}
        </HeaderContainer>
        <FormWrapper>
          <FormImageContainer>
            <FormImage src={Icons.IconForm} />
          </FormImageContainer>
          <FormContainer>
            <FormHeader>For any suppoort just send your query</FormHeader>
            <FormDescription>
              Collaboratively promote client-focused convergence vis-a-vis
              customer-directed alignments via plagiarized strategic users and
              standardized infrastructures.
            </FormDescription>
            <Form>
              <NameInputContainer>
                <InputContainer>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && <FormError>{formErrors.name}</FormError>}
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <FormError>{formErrors.email}</FormError>
                  )}
                </InputContainer>
              </NameInputContainer>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && (
                <FormError>{formErrors.subject}</FormError>
              )}
              <TextAreaContainer>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                  <FormError>{formErrors.message}</FormError>
                )}
              </TextAreaContainer>
              <ButtonContainer>
                <Button type="submit" onClick={handleSubmit}>
                  Send Message
                </Button>
              </ButtonContainer>
            </Form>
          </FormContainer>
        </FormWrapper>
      </Container>
    </HeaderItem>
  );
};

export default ContactUs;
