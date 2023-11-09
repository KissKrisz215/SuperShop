import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  NotificationText,
  NotificationBody,
  NotificationIcon,
  LoadingBarContainer,
  LoadingBar,
  ExitButton,
} from "./Notification.styles";

const Notification = ({ message }) => {
  const isNotificationActive = useSelector((state) => state.notification);

  return (
    <Container isNotificationActive={isNotificationActive}>
      <ExitButton>
        <svg
          aria-hidden="true"
          viewBox="0 0 1 d4 16"
          width="0.7rem"
          height="0.7rem"
        >
          <path
            fill="#6B7280"
            d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
          ></path>
        </svg>
      </ExitButton>
      <NotificationBody>
        <NotificationIcon>
          <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="#ef4444">
            <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path>
          </svg>
        </NotificationIcon>
        <NotificationText>{message && message}</NotificationText>
      </NotificationBody>
      <LoadingBarContainer>
        <LoadingBar></LoadingBar>
      </LoadingBarContainer>
    </Container>
  );
};

export default Notification;