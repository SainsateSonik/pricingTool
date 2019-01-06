import React from 'react';
import { connect } from "react-redux";

import "./Evaluation.css";
import EvalChart from './EvalChart/EvalChart';
import EvalDetails from './EvalDetails/EvalDetails';

const evalutaion = (props) => {
  const displayStat = props.resultToggle ? "block" : "none";
  
  return (
    <div className="evaluation-details" style={{ display: displayStat }}>
      <EvalDetails/>
      <EvalChart/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({ ...state.tool });
};

export default connect(mapStateToProps)(evalutaion);
