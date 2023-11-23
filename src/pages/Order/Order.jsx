import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../context/AuthProvider";
import Icons from "../../assets/index";
import {
  Wrapper,
  Container,
  HeaderContainer,
  HeaderText,
  HeaderHiglighted,
  BodyContainer,
  BodyHeaderContainer,
  BodyHeaderText,
  BodyHeaderItem,
  BodyHeader,
  StatusText,
  StatusHighlighted,
  StatusTextContainer,
  HeaderIcon,
  HeaderDescription,
  BodyTitle,
  BodyTitleText,
  GroupedBodyTitle,
  ItemsContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  TableRowHeader,
  TablDataHiglighted,
  TableDataNormal,
  TableDataBold,
  OrderSumContainer,
  OrderSumHeader,
  OrderSumText,
  OrderSumItem,
  TotalText,
  ButtonContainer,
  Button,
  InvoiceDetailsContainer,
  CustomFontAwesomeIcon,
} from "./Order.styles";

const tableHeaders = [
  "SR.",
  "Product Name",
  "Quantity",
  "Item Price",
  "Amount",
];

const Order = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getOrderDetails = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `http://localhost:3500/api/user/order/${id}`,
        {
          headers: {
            "x-auth-token": `${auth?.accessToken}`,
          },
        }
      );
      setOrderData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  if (isLoading || !orderData) {
    return <p>Loading......</p>;
  }

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderText>
            Thank You{" "}
            <HeaderHiglighted>
              {orderData.firstName} {orderData.lastName},
            </HeaderHiglighted>{" "}
            Your order has been received!
          </HeaderText>
        </HeaderContainer>
        <BodyContainer>
          <BodyHeaderContainer>
            <BodyHeaderText border={true}>
              <BodyHeaderItem>
                <BodyHeader>INVOICE</BodyHeader>
                <StatusTextContainer>
                  <StatusText>Status : </StatusText>
                  <StatusHighlighted status={orderData.status}>
                    {orderData.status}
                  </StatusHighlighted>
                </StatusTextContainer>
              </BodyHeaderItem>
              <BodyHeaderItem>
                <HeaderIcon alt="SuperStore Logo" src={Icons.LogoDark} />
                <HeaderDescription>
                  59 Station Rd, Purls Bridge, United Kingdom
                </HeaderDescription>
              </BodyHeaderItem>
            </BodyHeaderText>
            <BodyHeaderText>
              <BodyHeaderItem>
                <BodyTitle>Date</BodyTitle>
                <BodyTitleText>{formatDate(orderData.date)}</BodyTitleText>
              </BodyHeaderItem>
              <BodyHeaderItem>
                <BodyTitle>INVOICE NO.</BodyTitle>
                <BodyTitleText>{"#" + orderData.id}</BodyTitleText>
              </BodyHeaderItem>
              <InvoiceDetailsContainer>
                <BodyTitle>INVOICE TO.</BodyTitle>
                <BodyTitleText>
                  {orderData.firstName} {orderData.lastName},
                </BodyTitleText>
                <GroupedBodyTitle>
                  <BodyTitleText>{orderData.email}</BodyTitleText>
                  <BodyTitleText>{orderData.phone}</BodyTitleText>
                </GroupedBodyTitle>
                <GroupedBodyTitle>
                  <BodyTitleText>{orderData.address}</BodyTitleText>
                  <BodyTitleText>{orderData.city}</BodyTitleText>
                </GroupedBodyTitle>
              </InvoiceDetailsContainer>
            </BodyHeaderText>
          </BodyHeaderContainer>
          <ItemsContainer>
            <Table>
              <TableRowHeader>
                {tableHeaders &&
                  tableHeaders.map((item) => (
                    <TableHeader key={nanoid()}>
                      {item.toUpperCase()}
                    </TableHeader>
                  ))}
              </TableRowHeader>
              {orderData &&
                orderData.products.length > 1 &&
                orderData.products.map((product, index) => (
                  <TableRow key={nanoid()}>
                    <TableDataNormal>{index + 1}</TableDataNormal>
                    <TableDataNormal>{product.title.en}</TableDataNormal>
                    <TableDataBold>{product.quantity}</TableDataBold>
                    <TableDataBold>{product.prices.price}</TableDataBold>
                    <TablDataHiglighted>
                      ${(product.prices.price * product.quantity).toFixed(2)}
                    </TablDataHiglighted>
                  </TableRow>
                ))}
            </Table>
          </ItemsContainer>
          <OrderSumContainer>
            <OrderSumItem>
              <OrderSumHeader>PAYMENT METHOD</OrderSumHeader>
              <OrderSumText>
                {" "}
                {orderData.payment.paymentMethod.charAt(0).toUpperCase() +
                  orderData.payment.paymentMethod.slice(1)}
              </OrderSumText>
            </OrderSumItem>
            <OrderSumItem>
              <OrderSumHeader>SHIPPING COST</OrderSumHeader>
              <OrderSumText>${orderData.shippingCost + ".00"}</OrderSumText>
            </OrderSumItem>
            <OrderSumItem>
              <OrderSumHeader>DISCOUNT</OrderSumHeader>
              <OrderSumText>$0.00</OrderSumText>
            </OrderSumItem>
            <OrderSumItem>
              <OrderSumHeader>TOTAL AMOUNT</OrderSumHeader>
              <TotalText>${orderData.totalAmount.toFixed(2)}</TotalText>
            </OrderSumItem>
          </OrderSumContainer>
        </BodyContainer>
        <ButtonContainer>
          <Button onClick={() => window.print()}>
            Print Invoice <CustomFontAwesomeIcon icon={faPrint} />
          </Button>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Order;
