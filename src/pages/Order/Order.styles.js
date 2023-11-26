import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  min-height: 800px;
  background-color: #f9fafb;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1450px;
  width: 100%;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  @media only screen and ${breakpoints.device.xxs} {
    padding: 1.5rem 0.5rem;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #d1fae5;
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
`;

export const HeaderText = styled.p`
  font-size: 0.77rem;
`;

export const HeaderHiglighted = styled.span`
  color: ${(props) => props.theme.darkGreen};
  font-size: 0.77rem;
  font-weight: 700;
`;

export const BodyContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const BodyHeaderContainer = styled.div`
  padding: 0rem 1.5rem;
  background-color: ${(props) => props.theme.gray};
  display: flex;
  flex-direction: column;
`;

export const BodyHeaderText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.5rem 0rem 1.5rem;
  border-bottom: ${(props) => (props.border ? "1px solid #f9fafb" : "none")};
  @media only screen and ${breakpoints.device.xxs} {
    flex-direction: row;
  }
`;

export const BodyHeader = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

export const StatusText = styled.p`
  font-size: 0.8rem;
  color: #374151;
`;

export const StatusHighlighted = styled.p`
  font-size: 0.8rem;
  color: ${(props) =>
    props.status === "Delivered"
      ? props.theme.emeraldGreen
      : props.theme.orangeDark};
`;

export const StatusTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const HeaderIcon = styled.img`
  max-width: 120px;
  width: 100%;
  align-self: flex-start;
  margin-bottom: 0.2rem;
  @media only screen and ${breakpoints.device.xxs} {
    align-self: flex-end;
  }
`;

export const HeaderDescription = styled.p`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.7rem;
`;

export const InvoiceDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.8rem;
  @media only screen and ${breakpoints.device.xxs} {
    align-items: flex-end;
  }
`;

export const BodyHeaderItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.8rem;
`;

export const BodyTitle = styled.p`
  color: #4b5563;
  font-size: 0.73rem;
  font-weight: 600;
`;

export const BodyTitleText = styled.p`
  font-size: 0.7rem;

  color: ${(props) => props.theme.mediumGray};
`;

export const GroupedBodyTitle = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const ItemsContainer = styled.div`
  padding: 1.3rem;
  max-height: 170px;
  overflow: scroll;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
  @media only screen and ${breakpoints.device.xxs} {
    align-items: flex-end;
  }
`;

export const TableHeader = styled.th`
  font-size: 0.6rem;
  color: #374151;
  font-weight: 600;
  padding: 0.4rem 0rem;
`;

export const TableRowHeader = styled.tr`
  background-color: #f3f4f6;
  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.09);
`;

export const TableDataNormal = styled.td`
  color: ${(props) => props.theme.mediumGray};
  font-size: 0.7rem;
`;

export const TableDataBold = styled.td`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0rem;
`;

export const TableRow = styled.tr`
  text-align: center;
  width: 100%;
  border: 1px solid #f3f4f6;
`;

export const TablDataHiglighted = styled.td`
  color: ${(props) => props.theme.red};
  font-size: 0.7rem;
  font-weight: 600;
`;

export const TableData = styled.td``;

export const OrderSumContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 1.2rem;
  padding: 2.5rem 1.5rem;
  background-color: #ecfdf5;
  border: 1.5px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.6rem;
  @media only screen and ${breakpoints.device.xxs} {
    flex-direction: row;
  }
`;

export const OrderSumItem = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const OrderSumHeader = styled.p`
  font-size: 0.65rem;
  font-weight: 600;
  color: #4b5563;
`;

export const OrderSumText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${(props) => props.theme.mediumGray};
`;

export const TotalText = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${(props) => props.theme.red};
`;

export const ButtonContainer = styled.div`
  margin: 0.8rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoints.device.xxs} {
    justify-content: flex-end;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: #ffff;
  background-color: ${(props) => props.theme.emeraldGreen};
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: 0.3rem;
  transition: 0.18s ease-in-out;
  width: 100%;
  max-width: 400px;
  text-align: center;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
  }

  @media only screen and ${breakpoints.device.xxs} {
    text-align: auto;
    width: auto;
    max-width: auto;
  }
`;

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.65rem;
  margin: 0rem 0rem 0rem 0.2rem;
`;

export const LoadingContainer = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
