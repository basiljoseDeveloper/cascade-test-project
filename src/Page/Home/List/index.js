import React from "react";
import Table from "../../../Molecules/Table";

const Listing = (props) => {
  const columns = [
    { Header: "Sl No", className: "text-left", accessor: "check" },
    { Header: "Description", className: "text-right", accessor: "text" },
  ];
  return <Table columns={columns} data={props.tableData} />;
};

export default Listing;
