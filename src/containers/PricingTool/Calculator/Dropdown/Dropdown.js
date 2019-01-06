import React from 'react';
import dropdownOption from "../../../../static/_data_/pricingToolDropdownOptions";

const dropdown = props => {
    const options = dropdownOption.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
    ));

    return (
        <div id="selection">
            <label>Municipality</label>
            <i className="fas fa-chevron-down"></i>
            <select required value={props.optedVal} onChange={props.changeHandler}>
                {options}
            </select>
        </div>
    );
};

export default dropdown;
