import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRotate,
  faTruck,
  faCheck,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  Container,
  TableHeaderRow,
  TableHeader,
  TableRow,
  TableData,
  Button,
  ErrorMessageContainer,
  ErrorMessage,
  PriceText,
  StatusData,
  TableNavigationContainer,
  NavigationButton,
  TableWrapper,
  NavigationButtonText,
  PageInnerText,
  TableHeaderContainer,
  TableHeaderInfo,
  CustomFontAwesome,
  TableHeaderTitle,
  TableTextContainer,
  TableHeaderPrice,
  NavigationFontAwesome,
  IconContainer,
  Icon,
} from "./OrdersTable.styles";
import AuthContext from "../../context/AuthProvider";

const OrdersTable = ({ headers, isTableHeader }) => {
  const [orderData, setOrderData] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(null);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [processingOrders, setProcessingOrders] = useState(0);
  const [completeOrders, setCompleteOrders] = useState(0);
  const { auth } = useContext(AuthContext);

  const getData = async () => {
    try {
      const { data } = await axios("http://localhost:3500/api/user/orders", {
        headers: {
          "x-auth-token": `${auth?.accessToken}`,
        },
      });
      setOrderData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (orderData) {
      const numberOfPages = Math.ceil(orderData.length / 8);
      const pageArray = Array.from(
        { length: numberOfPages },
        (_, index) => index + 1
      );
      setPages(pageArray);
    }
  }, [orderData]);

  const getSliceIndices = () => {
    const startIndex = (activePage - 1) * 8;
    const endIndex = startIndex + 8;
    return [startIndex, endIndex];
  };

  const getHeaderData = () => {
    if (orderData) {
      const totalOrders = orderData.length;
      const pendingOrders = orderData.filter(
        (item) => item.status === "Pending"
      ).length;
      const processingOrders = orderData.filter(
        (item) => item.status === "Processing"
      ).length;
      const completeOrders = orderData.filter(
        (item) => item.status === "Delivered"
      ).length;
      setTotalOrders(totalOrders);
      setPendingOrders(pendingOrders);
      setCompleteOrders(completeOrders);
      setProcessingOrders(processingOrders);
    }
  };

  const tableHeaders = [
    {
      title: "Total Orders",
      icon: faCartShopping,
      color: "#DC2626",
      background: "#FECACA",
      value: totalOrders,
    },
    {
      title: "Pending Orders",
      icon: faRotate,
      color: "#EA580C",
      background: "#FED7AA",
      value: pendingOrders,
    },
    {
      title: "Processing Orders",
      icon: faTruck,
      color: "#4F46E5",
      background: "#C7D2FE",
      value: processingOrders,
    },
    {
      title: "Completed Orders",
      icon: faCheck,
      color: "#059669",
      background: "#A7F3D0",
      value: completeOrders,
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getHeaderData();
  }, [orderData]);

  const handlePageChange = (newPage) => {
    if (pages) {
      const totalPages = pages.length;

      if (newPage < 1) {
        newPage = 1;
      } else if (newPage > totalPages) {
        newPage = totalPages;
      }

      setActivePage(newPage);
    }
  };

  return (
    <Wrapper>
      {isTableHeader && (
        <TableHeaderContainer>
          {tableHeaders.map((header) => (
            <TableHeaderInfo>
              <CustomFontAwesome
                background={header.background}
                color={header.color}
                icon={header.icon}
              />
              <TableTextContainer>
                <TableHeaderTitle>{header.title}</TableHeaderTitle>
                <TableHeaderPrice>
                  {header.value ? header.value : "0"}
                </TableHeaderPrice>
              </TableTextContainer>
            </TableHeaderInfo>
          ))}
        </TableHeaderContainer>
      )}
      {orderData && (
        <TableWrapper>
          <Container>
            <TableHeaderRow>
              {headers &&
                headers.map((header) => <TableHeader>{header}</TableHeader>)}
            </TableHeaderRow>
            {orderData.slice(...getSliceIndices()).map((orderData) => (
              <TableRow>
                <TableData>{orderData.id}</TableData>
                <TableData>{formatDate(orderData.date)}</TableData>
                <TableData>{orderData.payment.paymentMethod}</TableData>
                <StatusData
                  status={orderData.status === "Delivered" ? true : false}
                >
                  {orderData.status}
                </StatusData>
                <TableData>
                  <PriceText>${orderData.totalAmount}</PriceText>
                </TableData>
                {headers.includes("Action") && (
                  <TableData>
                    <Button>Details</Button>
                  </TableData>
                )}
              </TableRow>
            ))}
          </Container>

          <TableNavigationContainer>
            <NavigationButton onClick={() => handlePageChange(activePage - 1)}>
              <NavigationFontAwesome icon={faChevronLeft} />
            </NavigationButton>
            <NavigationButton onClick={() => handlePageChange(activePage - 2)}>
              <NavigationFontAwesome icon={faChevronLeft} />
              <NavigationFontAwesome icon={faChevronLeft} />
            </NavigationButton>
            {activePage && (
              <NavigationButtonText activePage={activePage}>
                <PageInnerText>{activePage}</PageInnerText>
              </NavigationButtonText>
            )}
            <NavigationButton onClick={() => handlePageChange(activePage + 2)}>
              <NavigationFontAwesome icon={faChevronRight} />
              <NavigationFontAwesome icon={faChevronRight} />
            </NavigationButton>
            <NavigationButton onClick={() => handlePageChange(activePage + 1)}>
              <NavigationFontAwesome icon={faChevronRight} />
            </NavigationButton>
          </TableNavigationContainer>
        </TableWrapper>
      )}
      {orderData === null && (
        <ErrorMessageContainer>
          <IconContainer>
            <Icon>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.65em"
                width="1.65em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
              </svg>
            </Icon>
          </IconContainer>
          <ErrorMessage>No Orders!</ErrorMessage>
        </ErrorMessageContainer>
      )}
    </Wrapper>
  );
};

export default OrdersTable;
