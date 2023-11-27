import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 1rem;
  background-color: #ffff;
  width: 330px;
  min-height: 65px;
  z-index: 1000;
  border-radius: 0.2rem;
  overflow: hidden;
  display: ${(props) => (props.isNotificationActive ? "block" : "none")};
`;

export const NotificationBody = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 0.9rem;
`;

export const NotificationText = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.mediumGray};
`;

export const NotificationIcon = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ExitButton = styled.div`
  position: absolute;
  right: 0.3rem;
  top: 0.1rem;
  cursor: pointer;
`;

const loadingAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const LoadingBarContainer = styled.div`
  width: 100%;
  background: #ffffff;
`;

export const LoadingBar = styled.div`
  height: 6px;
  background-color: #ef4444;
  width: 100%;
  animation: ${loadingAnimation} 2s linear forwards;
`;
