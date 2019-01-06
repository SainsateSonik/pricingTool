import React, { Component } from 'react';
import "./PricingTool.css";
import Description from "./Description/Description";
import Calculator from "./Calculator/Calculator";

class PricingTool extends Component {
  render() {
    return (
      <section className="pricing-tool">
        <Description/>
        <Calculator/>
      </section>
    )
  }
}

export default PricingTool;