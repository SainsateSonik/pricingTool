import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Reports.css";

class Reports extends Component {
    render() {
        if(!this.props.isAuthenticated) return <Redirect to="/" />;
        return (
            <section id="reports">
                <h1>Reports tab</h1>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({ ...state.auth });

export default connect(mapStateToProps)(Reports);