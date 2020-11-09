import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserIcon from "../userIcon/UserIcon"
import logoutUser from "../../actions/logoutAction";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import styled from 'styled-components';

const LinkStyled = styled(Link)`
    color: #ffffff;
    font-weight:bold;
    letter-spacing:2px;
	:hover {
        // background-color: #fb8c00;
		color: #00897b;
		font-weight:bold
	}
`

const ButtonStyled = styled.button`
    color: #111111;
    font-weight:bold;
    letter-spacing:2px;
	:hover {
        // background-color: #fb8c00;
		color: blue;
		font-weight:bold
	}
`

const LinkBrand = styled(Link)`
    height: 64px;
	// :hover {
    //     background-color: white;
	// }
`
class Navbars extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        // M.Sidenav.init(elems);
    }
    render() {
        console.log("navbar",this.props.auth.user.type)
        return (
            <header className="no-padding">
                <div className="navbar-fixed">
                    <Navbar bg="info" expand="lg">
                        <Navbar.Brand href="/">Prescription</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="text-white" href="/">Home |</Nav.Link>
                                <Nav.Link className="text-white" href="/about">About |</Nav.Link>
                                <Nav.Link className="text-white" href="/patient"><i className="fas fa-user-injured"></i> Patients |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-capsules"></i> Drugs |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-stethoscope"></i> Encounters |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-exclamation-triangle"></i> C/C |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-heart"></i> O/E |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-diagnoses"></i> Diagnosis |</Nav.Link>
                                <Nav.Link className="text-white" href="#deets"><i className="fas fa-file-medical-alt"></i> Prescription |</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                            {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}

                            {this.props.auth.isAuthenticated ?
                                <>
                                    {
                                        this.props.auth.user.type === 'student' ?
                                            <>
                                                <Nav.Link className="text-white" href="/patient">Patients</Nav.Link>
                                            </>
                                            :
                                            ''
                                    }
                                    <li><UserIcon /></li>
                                </>
                                :
                                <>
                                    <Nav.Link className="text-white" href="/login"><i className="fas fa-sign-in-alt"></i> Log In</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar>


                </div>
            </header>
        );
    }
}
Navbars.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser },
)(Navbars);