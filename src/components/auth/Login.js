import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            loading: false,
            errors: {}
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
                loading: false
            });
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            if (this.props.auth.user.type === "student") {
                this.props.history.push("/dashboard");
            }
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        this.setState({ loading: true })
        const userData = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
        this.setState({ loading: false })
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container mt-5">
                <Link to="/" className=" ">
                    <i className="fas fa-arrow-left"> Back to home</i>
                </Link>
                <div className="col-sm-12 mt-3" style={{ paddingLeft: "11.250px" }}>
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>

                <div className="card" style={{width: "18rem;"}}>
                    <div className="card-header text-center">
                        <span >Log In</span>
                    </div>
                    <div className="card-body">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label >Email address</label>
                                <input
                                    placeholder="Enter email"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("form-control", {
                                        invalid: errors.email || errors.emailnotfound
                                    })}
                                />
                                <span className="red-text">
                            {errors.email}
                                    {errors.emailnotfound}
                        </span>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input
                                    placeholder="Password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("form-control", {
                                        invalid: errors.password || errors.passwordincorrect
                                    })}
                                />
                                <span className="red-text">
                            {errors.password}
                                    {errors.passwordincorrect}
                        </span>
                            </div>
                            {this.state.loading ? (
                                <div className="progress">
                                    <div className="indeterminate"></div>
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            )}

                            <div className="col-md-12" style={{ marginTop: "5%" }}>
                                <Link to="/forgotpass">Forgot Password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);