import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  padding: 0.9rem 0.7rem;
  display: flex;
  gap: 0.3rem;
  justify-content: space-between;
  transition: background 0.12s ease-in-out;
  border-top: 1px solid ${(props) => props.theme.gray};
  &:hover {
    background: #f9fafb;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  height: 100%;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  position: relative;
  width: 300px;
`;

export const Icon = styled.img`
  width: 45px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h4`
  font-size: 0.7rem;
  margin: 0;
`;

export const InfoSubTitle = styled.p`
  font-size: 0.55rem;
  color: ${(props) => props.theme.lightGray};
`;

export const InfoPriceText = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 0.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

export const DeleteButton = styled.div``;

export const DeleteButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: ${(props) => props.theme.red};
`;
