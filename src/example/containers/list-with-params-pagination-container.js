import React from "react";
import { connect } from "react-redux";
import { store } from "../../constants/store";
import { registerPagination } from "../../containers";
import ListPaginationContainer from "./list-pagination-container";
import ListContainer from "./list-container";

const RegisteredPaginationContainer = registerPagination({
  store,
  paginationName: "withparams",
  paramName: "stage",
  withparams: true
});

const ListWithParamsPaginationContainer = ({ params }) => (
  <RegisteredPaginationContainer>
    <ListPaginationContainer params={params} paramName="stage" />
    <ListContainer params={params} />
  </RegisteredPaginationContainer>
);

const mapStateToProps = state => ({
  params: state.pagination.withparams.params
});

export default connect(mapStateToProps)(ListWithParamsPaginationContainer);
