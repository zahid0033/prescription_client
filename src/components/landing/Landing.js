import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderImg from "../layout/HeaderImg";
import logo from "../../images/logo.png";
import children from "../../images/children.jpg";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo = (x, y) => {
      document.documentElement.scrollTop = y;
    }
    window.scrollTo(0, 0)
    // If logged in and user navigates to Landing page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      if (this.props.auth.user.type === "student") {
        this.props.history.push("/dashboard");
      } else if (this.props.auth.user.type === "mentor") {
        this.props.history.push("mentor/dashboard");
      }
      else if (this.props.auth.user.type === "admin") {
        this.props.history.push("admin/dashboard");
      }
    }
  }
  render() {
    return (
      <div>
        {/*<HeaderImg />*/}
        {/*user registration*/}
        <div className="text-center" style={{ backgroundImage: `url(${children})`, backgroundSize:"cover",   backgroundPosition: "0px -75px"}}>
          <div style={{ background: "#d6d6d699", padding: "40px"}}>
            <div className="container">
              <h2 className="mb-5"> Dear Doctors, Greetings from<b> <span className="medi">Prescription</span><span className="bee">BEE</span></b> </h2>
              <p className="mb-4">Prescription is online education platform where we disseminate contemporary knowledge through live classroom , training and video based courses.</p>
              <p>Prescription একটি অনলাইন শিক্ষামূলক প্ল্যাটফর্ম। আমাদের মূল লক্ষ্য হল একটি ইউনিফাইড প্ল্যাটফর্মে শিক্ষার্থী এবং প্রফেশনালদের একত্রিত করা।</p>

              <h4 className="mb-5">Register Now</h4>
              <div style={{ justifyContent: "space-evenly" }} className="row">
                <div className="col-sm-6 col-md-6">
                  <Link to="/register" style={{ margin: "10px", width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-primary ">
                    Register
                  </Link>
                </div>
                <div className="col-sm-6 col-md-6">
                  <Link to="/login" style={{ margin: "10px", width: "140px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-danger">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*user registration end*/}
        <div>
          <div className="">
            <section id="team" className="pb-5">
              <div className="container">
                <h5 className="section-title h1">OUR Services</h5>
                <div className="row">

                  {/* Team member */}
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip">
                      <div className="mainflip flip-0">
                        <div className="frontside">
                          <div className="card">
                            <div className="card-body text-center">
                              <p><i className="fas fa-5x fa-question-circle"></i></p>
                              <h4 className="card-title">Need Help ?</h4>
                              <p className="card-text">Do you need any help for running this software?</p>
                            </div>
                          </div>
                        </div>
                        <div className="backside">
                          <div className="card">
                            <div className="card-body text-center mt-4">
                              <h4 className="card-title">Need Help ?</h4>
                              <p className="card-text">Before running this software you can check our youtube videos </p>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <Link className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                    <i className="fas fa-3x fa-arrow-circle-right"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Team member */}
                  {/* Team member */}
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip">
                      <div className="mainflip flip-0">
                        <div className="frontside">
                          <div className="card">
                            <div className="card-body text-center">
                              <p><i className="fas fa-5x fa-stethoscope"></i></p>
                              <h4 className="card-title">Are you a doctor ?</h4>
                              <p className="card-text">Do you need any help for running this software?</p>
                            </div>
                          </div>
                        </div>
                        <div className="backside">
                          <div className="card">
                            <div className="card-body text-center mt-4">
                              <h4 className="card-title">Are you a doctor ?</h4>
                              <p className="card-text">Before Managing this software you have to login first</p>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <Link to="/patient">
                                    <i className="fas fa-3x fa-arrow-circle-right"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Team member */}
                  {/* Team member */}
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="image-flip">
                      <div className="mainflip flip-0">
                        <div className="frontside">
                          <div className="card">
                            <div className="card-body text-center">
                              <p><i className="fas fa-5x fa-user-injured"></i></p>
                              <h4 className="card-title">Patient Database</h4>
                              <p className="card-text">You can check all registered patient database</p>
                            </div>
                          </div>
                        </div>
                        <div className="backside">
                          <div className="card">
                            <div className="card-body text-center mt-4">
                              <h4 className="card-title">Patient Database</h4>
                              <p className="card-text">Before running this software you can check our youtube videos </p>
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <Link className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                    <i className="fas fa-3x fa-arrow-circle-right"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ./Team member */}

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps
)(Landing);
