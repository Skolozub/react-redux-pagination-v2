import React from "react";
import { PaginationContainer } from "./";
import { registerPag } from "../actions/pagination-actions";

export const registerPagination = ({
  store,
  paginationName,
  paramName = "page",
  withparams = false
}) => {
  store.dispatch(
    registerPag({
      paginationName,
      options: { paramName, withparams }
    })
  );

  return props => (
    <PaginationContainer
      {...{ ...props, paginationName, paramName, withparams }}
    />
  );
};
