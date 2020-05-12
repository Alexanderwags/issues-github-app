import React from "react";
import PropTypes from "prop-types";

const TableData = ({ children }) => {
  return (
    <div style={{ width: "100%", borderBottom: "1px solid #e1e4e8" }}>
      {children}
    </div>
  );
};

TableData.propTypes = {};

export default TableData;
