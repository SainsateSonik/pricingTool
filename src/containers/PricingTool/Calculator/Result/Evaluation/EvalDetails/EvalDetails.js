import React from 'react'
import Factor from './Factor/Factor';
import evalFactors from "../../../../../../static/_data_/evaluationFactors";

const evalDetails = props => {
  const vals = [77,7,4,2,0,1,63];
  const factors = evalFactors.map((fact, index) => (
    <Factor key={index} type={fact} value={vals[index]}/>
  ));

  return (
    <div className="eval-details">
      {factors}
    </div>
  );
};

export default evalDetails;
