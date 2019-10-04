import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { setParams, deleteParams } from "../actions/pagination-actions";

class PaginationContainer extends Component {
  // -----------------Methods-------------------

  parseURLParamsAndAddPage = () => {
    const { location, paramName, withparams } = this.props;

    const params = queryString.parse(location.search);

    if (withparams) return { ...params, [paramName]: params[paramName] || 1 };
    return { [paramName]: params[paramName] || 1 };
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { paginationName, setParamsHandler } = this.props;
    const newParams = this.parseURLParamsAndAddPage();
    setParamsHandler({ paginationName: paginationName, params: newParams });
  };

  componentDidUpdate = prevProps => {
    const { location, paginationName, setParamsHandler } = this.props;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    const newParams = this.parseURLParamsAndAddPage();
    setParamsHandler({ paginationName, params: newParams });
  };

  componentWillUnmount = () => {
    const { paginationName, deleteParamsHandler, saveParams } = this.props;
    if (!saveParams) deleteParamsHandler({ paginationName });
  };

  render = () => <>{this.props.children}</>;
}

const mapStateToProps = state => ({
  location: state.router.location
});

const mapDispatchToProps = dispatch => ({
  setParamsHandler: payload => dispatch(setParams(payload)),
  deleteParamsHandler: payload => dispatch(deleteParams(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
