import React from 'react';
import { connect } from "react-redux";

import "./Calculator.css";
import Input from "./Input/Input";
import Dropdown from "./Dropdown/Dropdown";
import Result from './Result/Result';
import pricingToolInputs from "../../../static/_data_/pricingToolInputs";
import actionTypes from "../../../redux/actionTypes";
import HOC from "../../../HOC/HOC";


const calculator = (props) => {
  const displayStat = props.calculatorToggle ? "block" : "none";
  const inValues = [
    props.inputValues.currentMortgage,
    props.inputValues.loanToValue,
    props.inputValues.newMortgage,
    props.inputValues.monthlyAmortization,
    props.inputValues.otherMortgages,
    props.inputValues.yearlyIncome
  ];

  const calculate = (event) => {
    event.preventDefault();
    document.querySelector(".calculator").classList.add("start-calculation");
    document.querySelector(".interest-rates").classList.add("search-rates");
    document.querySelector(".eval-chart").classList.add("render-chart");
    document.querySelector(".eval-details").classList.add("eval-factors");
    props.setResult(true);
  };

  const changeHandler = (event) => {
    const parentId = event.target.parentElement.id;
    const value = event.target.value;
    props.inputChangeHandler(parentId, value);
  };

  const inputs = pricingToolInputs.map((_in, i) => {
    return (
      <Input key={_in.id} id={_in.id}
             label={_in.label}
             iconClass={_in.iconClass}
             maxIn={_in.maxIn}
             inValue={inValues[i]}
             changeHandler={changeHandler}/>
    );
  });

  return (
    <HOC>
      <div className="calculator" style={{ display: displayStat }}>
        <h3>Provide following details</h3>
        <hr/>
        <form onSubmit={calculate}>
          {inputs}
          <Dropdown optedVal={props.inputValues.municipality} changeHandler={changeHandler}/>
          <div id="buttons">
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>
      <Result/>
    </HOC>
  );
};

const mapStateToProps = (state) => {
  return ({ ...state.tool });
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCalculator: () => dispatch({ type: actionTypes.TOGGLE_CALCULATOR }),
    toggleResult: () => dispatch({ type: actionTypes.TOGGLE_RESULT }),
    setResult: (stat) => dispatch({ type: actionTypes.SET_RESULT, resultStat: stat }),
    inputChangeHandler: (id, val) => dispatch({ type: actionTypes.CHANGE_HANDLER, payload: {id, val} }),
    calculateRates: () => dispatch({ type: actionTypes.CALCULATE_RATES })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(calculator);
