import React from "react";
import {
  CustomRadioContainer,
  RadioBtn,
  RadioButtonTitle,
  Description,
  TextContainer,
  CustomFontAwesomeIcon,
} from "./RadioButton.styles";

const RadioButton = ({
  title,
  description,
  icon,
  group,
  name,
  defaultCheck,
  valueChangeHandler,
}) => {
  return (
    <CustomRadioContainer for={name}>
      <RadioBtn
        id={name}
        type="radio"
        name={group}
        defaultChecked={defaultCheck}
        onChange={() => valueChangeHandler(name)}
      />
      <CustomFontAwesomeIcon icon={icon} />
      <TextContainer>
        <RadioButtonTitle>{title}</RadioButtonTitle>
        <Description>{description}</Description>
      </TextContainer>
    </CustomRadioContainer>
  );
};

export default RadioButton;
