import React from 'react';
import { connect } from 'react-redux';

import "./RatesBreakdown.css";

import Time from './Rows/Time';
import ListPrice from './Rows/ListPrice';
import Discount from './Rows/Discount';
import FinalRate from './Rows/FinalRate';

const ratesBreakdown = (props) => {
    const displayStat = props.resultToggle ? "block" : "none";

    return (
        <div className="interest-rates" style={{ display: displayStat }}>
            <Time />
            <ListPrice />
            <Discount />
            <FinalRate />
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({ ...state.tool });
};

export default connect(mapStateToProps)(ratesBreakdown);
