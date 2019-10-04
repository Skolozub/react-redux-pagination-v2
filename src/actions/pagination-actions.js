import {
  PAGINATION_REGISTERED,
  PAGINATION_SET_PARAMS,
  PAGINATION_DEL_PARAMS
} from "./constants";

// TODO: change func name to registerPagination
export const registerPag = ({ paginationName, options }) => ({
  type: PAGINATION_REGISTERED,
  payload: {
    paginationName,
    options
  }
});

// TODO: change func name to setPaginationParams
export const setParams = ({ paginationName, params }) => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName,
    params
  }
});

// TODO: change func name to deletePaginationParams
export const deleteParams = ({ paginationName }) => ({
  type: PAGINATION_DEL_PARAMS,
  payload: {
    paginationName
  }
});
