import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "./OrdersTable.styles";

const OrdersTable = ({ headers, isTableHeader }) => {
  const [orderData, setOrderData] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(null);
  const [totalOrders, setTotalOrders] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [processingOrders, setProcessingOrders] = useState(0);
  const [completeOrders, setCompleteOrders] = useState(0);

  const getData = async () => {
    try {
      const { data } = await axios("http://localhost:3500/api/user/orders", {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTUzZjdjMWFhNTk5OTM1MzI0ZWNhOGMiLCJpYXQiOjE3MDAxNDIwNTYsImV4cCI6MTcwMDE0NTY1Nn0.QI5y_Yx6JNui4mnwmNDm7ugHW-hOHfuTlMpoZ4H1FNU",
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pages.length) {
      setActivePage(page);
    }
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
                <TableData>{orderData.paymentMethod}</TableData>
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
          <ErrorMessage>No Orders!</ErrorMessage>
        </ErrorMessageContainer>
      )}
    </Wrapper>
  );
};

export default OrdersTable;
