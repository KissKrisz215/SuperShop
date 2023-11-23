import React, { useEffect, useState } from "react";
import axios from "axios";
import UserHeader from "../../components/Header/UserHeader";
import {
  Container,
  FormWrapper,
  InputContainer,
  ImageInputContainer,
  Label,
  ImageInput,
  ImageLabel,
  ImageInputTextContainer,
  ImageInputIcon,
  ImageInputTitle,
  ImageInputDescription,
  ButtonContainer,
  Button,
  InputWrapper,
  Input,
  ErrorMessage,
} from "./UpdateProfile.styles";

const UpdateProfile = () => {
  const initialFormData = {
    username: "",
    address: "",
    phoneNumber: "",
    email: "",
    profilePicture: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  useEffect(() => {
    const emailIsEmpty = formData.email.length === 0;
    const phoneIsEmpty = formData.phoneNumber.length === 0;

    if (!emailIsEmpty) {
      const isEmailValid = validateEmail(formData.email);
      if (!isEmailValid) {
        setErrors((prevState) => ({
          ...prevState,
          email: "Please provide a valid email format",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (!phoneIsEmpty) {
      const isPhoneValid = validatePhoneNumber(formData.phoneNumber);
      if (!isPhoneValid) {
        setErrors((prevState) => ({
          ...prevState,
          phoneNumber: "Please provide a valid phone number format",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          phoneNumber: "",
        }));
      }
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phoneNumber: "",
      }));
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.email.length === 0 && errors.phoneNumber.length === 0) {
      handleData(formData);
      setFormData(initialFormData);
    }
  };

  const handleData = async (data) => {
    try {
      const response = await axios.put(
        "https://super-shop-backend-five.vercel.app/api/user/update",
        data,
        {
          headers: {
            "x-auth-token": ``,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserHeader title="Update Profile">
      <Container>
        <FormWrapper onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Photo</Label>
            <ImageInputContainer>
              <ImageLabel htmlFor="imageinput">
                <ImageInputTextContainer>
                  <ImageInputIcon>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-3xl text-emerald-500"
                      height="1.4em"
                      width="1.4em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <polyline points="16 16 12 12 8 16"></polyline>{" "}
                      <line x1="12" y1="12" x2="12" y2="21"></line>{" "}
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>{" "}
                      <polyline points="16 16 12 12 8 16"></polyline>{" "}
                    </svg>
                  </ImageInputIcon>
                  <ImageInputTitle>Drag your image here</ImageInputTitle>
                  <ImageInputDescription>
                    (Only *.jpeg and *.png images will be accepted)
                  </ImageInputDescription>
                </ImageInputTextContainer>
              </ImageLabel>
              <ImageInput
                name="profilePicture"
                id="imageinput"
                hidden
                type="file"
                onChange={handleImageInputChange}
              />
            </ImageInputContainer>
          </InputContainer>
          <InputWrapper>
            <InputContainer>
              <Label name="username">Full Name</Label>
              <Input
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleInputChange}
                value={formData.username}
              />
            </InputContainer>
            <InputContainer>
              <Label name="address">Address</Label>
              <Input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                value={formData.address}
              />
            </InputContainer>
          </InputWrapper>
          <InputWrapper>
            <InputContainer>
              <Label name="phoneNumber">Phone/Mobile</Label>
              <Input
                name="phoneNumber"
                placeholder="Phone/Mobile"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                value={formData.phoneNumber}
              />
              {errors.phoneNumber && (
                <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
              )}
            </InputContainer>
            <InputContainer>
              <Label name="email">Email Address</Label>
              <Input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                value={formData.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputContainer>
          </InputWrapper>
          <ButtonContainer>
            <Button onClick={handleSubmit} type="submit">
              Update Profile
            </Button>
          </ButtonContainer>
        </FormWrapper>
      </Container>
    </UserHeader>
  );
};

export default UpdateProfile;
