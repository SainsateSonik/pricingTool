import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Rules.css";

class Rules extends Component {
    render() {
        if(!this.props.isAuthenticated) return <Redirect to="/" />;
        return (
            <section id="rules">
                <h1>Rules Dashboard</h1>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({ ...state.auth });

export default connect(mapStateToProps)(Rules);