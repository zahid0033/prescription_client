import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  color: black;
  :hover {
    color: #ef6c00;
  }
`;

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer white z-depth-1">
        <div className="container" style={{ justifyContent: "center" }}>

        </div>

        <div className="footer-copyright">
          <div style={{ width: "100%" }} className="container">
            <LinkStyled to="/">

            </LinkStyled>
            <div style={{ lineHeight: "60px" }} className="right black-text">
              © Kernel Technology
            </div>
            <hr />
            
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Footer);
