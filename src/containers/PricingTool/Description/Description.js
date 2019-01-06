import React from 'react';
import { connect } from "react-redux";

import "./Description.css";
import graphic from "../../../static/images/estimation.png";
import actionTypes from "../../../redux/actionTypes";
import removeAnimation from "../../../static/_data_/removeAnimations";

const description = (props) => {
  const animationClass = props.calculator ? "add-calculator" : "remove-calculator";

  const beginCalculation = () => {
    removeAnimation();
    props.toggleCalculator();
  };

  return (
    <div className={`description ${animationClass}`}>
        <div className="back-cover"></div>
        <div className="content">
          <h1>Pricing Tool</h1>
          <p>Wish to plan your expenses within the budget, let us do it for you.</p>
          <p>Fast and easy way to check the interest rates based on the time period. Lets get started.</p>
          <button onClick={beginCalculation}>Calculate now</button>
        </div>
        <img className="graphic" src={graphic} alt="estimation graphic"/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    calculator: state.tool.calculatorToggle
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCalculator: () => dispatch({ type: actionTypes.TOGGLE_CALCULATOR })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(description);
