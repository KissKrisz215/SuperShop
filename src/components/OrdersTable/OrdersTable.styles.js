import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Wrapper = styled.div`
  min-height: 500px;
  ${"" /* max-height: 1000px; */}
  ${"" /* height: 100%; */}
  overflow: scroll;
`;

export const Container = styled.table`
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  border-radius: 0.3rem;
  overflow: hidden;
`;

export const TableWrapper = styled.div``;

export const TableHeaderRow = styled.tr`
  border: 1px solid #e5e7eb;
  background-color: ${(props) => props.theme.navbarPrimary};
`;

export const TableHeader = styled.th`
  font-size: 0.6rem;
  color: #374151;
  padding: 0.3rem 0rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  border: 1px solid #e5e7eb;
`;

export const TableData = styled.td`
  padding: 0.6rem 0rem;
  height: 22px;
  text-align: center;
  font-size: 0.65rem;
`;

export const StatusData = styled.td`
  color: ${(props) => (props.status ? "#10B981" : "#f97316")};
  font-size: 0.65rem;
  text-align: center;
`;

export const PriceText = styled.span`
  font-size: 0.6rem;
  font-weight: 700;
`;

export const Button = styled.button`
  font-size: 0.65rem;
  color: ${(props) => props.theme.darkGreen};
  background-color: #dafae5;
  font-weight: 700;
  border: none;
  padding: 0.2rem 0.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: 0.17s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.darkGreen};
    color: #ffff;
  }
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 8rem 0rem;
  gap: 0.4rem;
`;

export const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const TableNavigationContainer = styled.div`
  max-width: 300px;
  width: 100%;
  padding: 0.5rem 0rem;
  display: flex;
  gap: 0.4rem;
`;

export const NavigationButton = styled.button`
  border: 1px solid #e5e7eb;
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  cursor: pointer;
  transition: 0.18s ease-in-out;
  background-color: #ffff;
  &:hover {
    background-color: ${(props) => props.theme.emeraldGreen};
    color: #ffff;
    border: 1px solid ${(props) => props.theme.emeraldGreen};
  }
`;

export const NavigationButtonText = styled.button`
  background-color: ${(props) =>
    props.page === props.activePage ? `${props.theme.emeraldGreen}` : "#ffff"};
  border: 1px solid #e5e7eb;
  font-size: 0.65rem;
  cursor: pointer;
  border-radius: 0.2rem;
  color: ${(props) => (props.page === props.activePage ? "#ffff" : "#000")};
`;

export const PagesDropdownButton = styled.button`
  position: relative;
  border: none;
  font-size: 0.65rem;
  cursor: pointer;
  border-radius: 0.2rem;
  background-color: #ffff;
`;

export const PageInnerText = styled.p`
  font-size: 0.65rem;
  cursor: pointer;
  padding: 0.2rem 0.2rem;
`;

export const TableHeaderContainer = styled.div`
  margin: 0rem 0rem 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 100%;
  gap: 1rem;
  @media only screen and ${breakpoints.device.sm} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const TableHeaderInfo = styled.div`
  height: 80px;

  border: 1px solid #e5e7eb;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 1rem;
  gap: 0.5rem;
  @media only screen and ${breakpoints.device.sm} {
    padding: 0rem;
    justify-content: center;
  }
`;

export const CustomFontAwesome = styled(FontAwesomeIcon)`
  padding: 0.7rem;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  font-size: 0.8rem;
`;

export const TableHeaderTitle = styled.p`
  font-size: 0.75rem;
  color: #374151;
`;

export const TableHeaderPrice = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const TableTextContainer = styled.div``;

export const NavigationFontAwesome = styled(FontAwesomeIcon)`
  font-size: 0.5rem;
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d1fae5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.darkGreen};
`;
