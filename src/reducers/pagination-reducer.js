import {
  PAGINATION_REGISTERED,
  PAGINATION_SET_PARAMS,
  PAGINATION_DEL_PARAMS
} from "../actions/constants";

const initialState = {};

export const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION_REGISTERED: {
      return {
        ...state,
        [payload.paginationName]: {
          params: {},
          options: { ...payload.options }
        }
      };
    }

    case PAGINATION_SET_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: {
          ...state[payload.paginationName],
          params: { ...payload.params }
        }
      };
    }

    case PAGINATION_DEL_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: {
          ...state[payload.paginationName],
          params: {}
        }
      };
    }

    default: {
      return state;
    }
  }
};
