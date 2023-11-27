import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";
import UserHeader from "../../components/Header/UserHeader";
import {
  FormWrapper,
  InputContainer,
  Input,
  Label,
  Button,
  ButtonContainer,
  ErrorMessage,
} from "./ChangePassword.styles";
import { setNotification } from "../../store/Notification/actions";

const ChangePassword = () => {
  const initialFormData = {
    email: "",
    currentPassword: "",
    newPassword: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { auth } = useContext(AuthContext);
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
      const response = await axios.put(
        "http://localhost:3500/api/user/changepassword",
        {
          newPassword: data.newPassword,
          password: data.currentPassword,
        },
        {
          headers: {
            "x-auth-token": `${auth?.accessToken}`,
          },
        }
      );
      dispatch(setNotification(true, "Changed Successfully!", "success"));
    } catch (error) {
      console.error("Error making POST request:", error);
      dispatch(setNotification(true, "There was an error!", "failure"));
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
