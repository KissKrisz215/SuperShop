import React from "react";
import {
  faTruck,
  faWallet,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormContainer,
  FormWrapper,
  FormHeader,
  InputWrapper,
  InputContainer,
  Label,
  Input,
  ErrorMessage,
  Header,
  PaymentInputContainer,
  ActionButtonContainer,
  ActionShoppingButton,
  ActionShoppingText,
  ActionOrderButton,
  ButtonFontAwesomeIcon,
} from "./CheckOutForm.styles";
import RadioButton from "../RadioButton/RadioButton";
import PaymentInput from "../PaymentInput/PaymentInput";

const CheckOutForm = ({
  errors,
  formData,
  handleChange,
  handleShippingChange,
  paymentDropDown,
  handleCardChange,
  handlePaymentMethod,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      <FormWrapper>
        <FormHeader>01. Personal Details</FormHeader>
        <InputWrapper>
          <InputContainer>
            <Label>First Name</Label>
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <ErrorMessage>First Name is required!</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Label>Last Name</Label>
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <ErrorMessage>Last Name is required!</ErrorMessage>
            )}
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>Email Address</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>Email is required!</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label>Phone Number</Label>
            <Input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <ErrorMessage>Phone is required!</ErrorMessage>}
          </InputContainer>
        </InputWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormHeader>02. Shipping Details</FormHeader>
        <InputWrapper>
          <InputContainer>
            <Label>Street Address</Label>
            <Input
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <ErrorMessage>Address is required!</ErrorMessage>
            )}
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <InputContainer>
            <Label>City</Label>
            <Input
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <ErrorMessage>City is required!</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <Label>Country</Label>
            <Input
              name="country"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && (
              <ErrorMessage>Country is required!</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <Label>ZIP/Postal</Label>
            <Input
              name="zipCode"
              type="text"
              placeholder="ZIP/Postal"
              value={formData.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && (
              <ErrorMessage>ZIP/Postal is required!</ErrorMessage>
            )}
          </InputContainer>
        </InputWrapper>
      </FormWrapper>
      <Header>Shipping</Header>
      <InputWrapper>
        <InputContainer>
          <RadioButton
            title={"FedEx"}
            description={"Delivery: Today Cost : $60.00"}
            icon={faTruck}
            group="shipping"
            name="fedex"
            defaultCheck={true}
            value={"60.00"}
            valueChangeHandler={handleShippingChange}
          />
        </InputContainer>
        <InputContainer>
          <RadioButton
            title={"UPS"}
            description={"Delivery: 7 Days Cost : $20.00"}
            icon={faTruck}
            group="shipping"
            name="UPS"
            defaultCheck={false}
            value={"20.00"}
            valueChangeHandler={handleShippingChange}
          />
        </InputContainer>
      </InputWrapper>
      <FormWrapper>
        <FormHeader>03. Payment Details</FormHeader>
        <Header>Stripe is Payment</Header>
        <PaymentInputContainer>
          {paymentDropDown && (
            <PaymentInput handleCardChange={handleCardChange} />
          )}
          {errors.payment && (
            <ErrorMessage>Credit Card is required!</ErrorMessage>
          )}
        </PaymentInputContainer>
        <InputWrapper>
          <InputContainer>
            <RadioButton
              title={"Cash On Delivery"}
              description={null}
              icon={faWallet}
              group="payment"
              name="cash"
              defaultCheck={true}
              valueChangeHandler={handlePaymentMethod}
            />
          </InputContainer>
          <InputContainer>
            <RadioButton
              title={"Credit Card"}
              description={null}
              icon={faWallet}
              group="payment"
              name="card"
              defaultCheck={false}
              valueChangeHandler={handlePaymentMethod}
            />
          </InputContainer>
        </InputWrapper>
      </FormWrapper>
      <ActionButtonContainer>
        <ActionShoppingButton to={"/"}>
          <ButtonFontAwesomeIcon icon={faArrowLeft} />
          <ActionShoppingText>Continue Shopping</ActionShoppingText>
        </ActionShoppingButton>
        <ActionOrderButton onClick={handleSubmit}>
          <ActionShoppingText> Confirm Order</ActionShoppingText>
          <ButtonFontAwesomeIcon icon={faArrowRight} />
        </ActionOrderButton>
      </ActionButtonContainer>
    </FormContainer>
  );
};

export default CheckOutForm;
