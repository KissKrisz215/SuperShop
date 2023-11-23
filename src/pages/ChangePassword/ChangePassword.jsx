import React, { useState } from "react";
import axios from "axios";
import UserHeader from "../../components/UserHeader";
import {
  FormWrapper,
  InputContainer,
  Input,
  Label,
  Button,
  ButtonContainer,
  ErrorMessage,
} from "./ChangePassword.styles";

const ChangePassword = () => {
  const initialFormData = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Invalid email address";
    }

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `Field cannot be empty`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleData = async (data) => {
    try {
      const response = await axios.post(
        "https://super-shop-backend-five.vercel.app/api/user/changepassword",
        {
          newPassword: data.newPassword,
        }
      );
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleData(formData);
      setFormData(initialFormData);
      setErrors({});
    }
  };

  return (
    <UserHeader title="Change Password">
      <FormWrapper onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Email Address</Label>
          <Input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Current Password</Label>
          <Input
            name="currentPassword"
            type="password"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          {errors.currentPassword && (
            <ErrorMessage>{errors.currentPassword}</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer>
          <Label>New Password</Label>
          <Input
            name="newPassword"
            type="password"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && (
            <ErrorMessage>{errors.newPassword}</ErrorMessage>
          )}
        </InputContainer>
        <ButtonContainer>
          <Button onClick={handleSubmit} type="submit">
            Change Password
          </Button>
        </ButtonContainer>
      </FormWrapper>
    </UserHeader>
  );
};

export default ChangePassword;
