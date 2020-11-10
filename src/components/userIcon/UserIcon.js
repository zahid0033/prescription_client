import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logoutUser from "../../actions/logoutAction";
import {NavDropdown} from "react-bootstrap";

export class UserIcon extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount() {
        var elems = document.querySelectorAll('.dropdown-trigger');
    }
    render() {
        return (
            <>
                <NavDropdown title={this.props.auth.user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.onLogoutClick}>Logout</NavDropdown.Item>
                </NavDropdown>
            </>
        )
    }
}

UserIcon.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(UserIcon);
