import React from 'react';

import "./Result.css";
import Evaluation from './Evaluation/Evaluation';
import RatesBreakdown from './RatesBreakdown/RatesBreakdown';

const result = (props) => {
    return (
        <div className="result">
            <Evaluation />
            <RatesBreakdown />
        </div>
    );
};

export default result;
