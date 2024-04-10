import React, { Component } from "react";
import { bindActionCreators } from "redux";

import connect from "react-redux/es/connect/connect";

import "./HomeStyles.scss";

import HomeView from "./HomeView";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {} = this.props;

    return <HomeView />;
  }
}

HomeContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
