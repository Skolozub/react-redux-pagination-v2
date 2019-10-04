import React from "react";
import { Pagination } from "../components/organizms/pagination";
import { connect } from "react-redux";

const ListPaginationContainer = ({ count, location, params, paramName }) => (
  <Pagination {...{ count, location, params, paramName }} />
);

const mapStateToProps = state => ({
  count: 5,
  location: state.router.location
});

export default connect(mapStateToProps)(ListPaginationContainer);
