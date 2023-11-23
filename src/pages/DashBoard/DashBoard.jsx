import React from "react";
import UserHeader from "../../components/Header/UserHeader";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
const tableHeaders = ["ID", "OrderTime", "Method", "Status", "Total"];

const DashBoard = () => {
  return (
    <UserHeader title={"DashBoard"}>
      <OrdersTable isTableHeader={true} headers={tableHeaders}></OrdersTable>
    </UserHeader>
  );
};

export default DashBoard;
