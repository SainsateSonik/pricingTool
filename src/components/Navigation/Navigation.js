import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import styled from "styled-components";

import "./Navigation.css";
import brandLogo from '../../static/logos/navigation/logo-brand.png';
import actionTypes from "../../redux/actionTypes";
import removeAnimation from "../../static/_data_/removeAnimations";

const navigation = (props) => {
    
    const goingHome = () => {
        if(props.animationStat) removeAnimation();
        props.collapse();
    };

    const logout = () => {
        props.resetTool();
        props.logout();
    }

    const authLabel = props.isAuthenticated ? "Logout" : "Login";
    let navLinks;

    const Li =  styled.li`
        &::before{
            background-color: ${props.isAuthenticated ? "red" : "rgb(0, 153, 255)"};
        }
        &::after {
            background-color: ${props.isAuthenticated ? "rgb(0, 153, 255)" : "gray"};
        }
    `;
    
    if(!props.isAuthenticated) {
        navLinks = (
            <ul>
                <Link to="/auth"><Li className="auth-link-item"><span>{authLabel}</span></Li></Link>
            </ul>
        );
    } else {
        navLinks = (
            <ul>
                <Link to="/rules-dashboard"><li><span>Rules</span></li></Link>
                <Link to="/reports"><li><span>Reports</span></li></Link>
                <Li className="auth-link-item" onClick={logout}><span>{authLabel}</span></Li>
            </ul>
        );
    }

    return (
        <header>
            <nav>
                <section>
                    <Link to="/"><img src={brandLogo} alt="brand-logo" onClick={goingHome}/></Link>
                </section>
                {navLinks}
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => ({ ...state.auth });
const mapDispatchToProps = (dispatch) => {
    return {
        collapse: () => dispatch({ type: actionTypes.COLLAPSE_PRICING_TOOL }),
        logout: () => dispatch({ type: actionTypes.LOG_OUT }),
        resetTool: () => dispatch({ type: actionTypes.RESET_TOOL }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigation);