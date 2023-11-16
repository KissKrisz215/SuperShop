import React from "react";
import UserHeader from "../../components/UserHeader";
import OrdersTable from "../../components/OrdersTable/OrdersTable";

const tableHeaders = ["ID", "OrderTime", "Method", "Status", "Total", "Action"];

const MyOrders = () => {
  return (
    <UserHeader title="My Orders">
      <OrdersTable isTableHeaders={false} headers={tableHeaders}></OrdersTable>
    </UserHeader>
  );
};

export default MyOrders;
