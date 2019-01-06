import React from 'react';
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import "./AuthenticationForm.css";
import HOC from "../../../HOC/HOC";
import actionTypes from "../../../redux/actionTypes";

const AuthenticationForm = props => {
    const submitting = (e) => {
        e.preventDefault();
        props.validateUser();
        if(!props.isAuthenticated) return;
    };

    const inputChangeHandler = (e) => {
        props.handleChange({ name: e.target.name, value: e.target.value });
    };

    return (
        <HOC>
            { props.isAuthenticated ? <Redirect to="/"/> : null }
            <div className="authentication-form">
                <form onSubmit={submitting}>
                <div>
                    <input  type="text"
                            name="username"
                            placeholder="-- username | e-mail id --" 
                            spellCheck="false" 
                            maxLength={30} 
                            required
                            value={props.inputs.username}
                            onChange={inputChangeHandler}/>
                    <label><i className="fas fa-user"></i></label>
                </div>
                <div>
                    <input  type="password"
                            name="password"
                            placeholder="-- password --" 
                            spellCheck="false" 
                            maxLength={30}
                            required
                            value={props.inputs.password}
                            onChange={inputChangeHandler}/>
                    <label><i className="fas fa-key"></i></label>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
                </form>
            </div>
        </HOC>
    );
};

const mapStateToProps = (state) => ({ ...state.auth });
const mapDispatchToProps = (dispatch) => ({
    handleChange : (payload) => dispatch({ type: actionTypes.AUTH_CHANGE_HANDLER, payload }),
    validateUser : () => dispatch({ type: actionTypes.VALIDATE_USER })
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthenticationForm));
