import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import axios from 'axios';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';
import moment from "moment";

// import Breadcrumbs from "../layout/Breadcrumbs";

class Advice extends Component {
    constructor() {
        super();
        this.state = {
            patient : {},
            admission:[]
        }
    }

    componentDidMount() {

    }



    render() {
        const seo = {
            title: "Prescription : patient Details",
            description:
                "About patients.",
            url: "https://Prescription.com/patient/details",
            image: ""
        };
        return (
            <div>
                <Helmet
                    title={seo.title}
                    meta={[
                        {
                            name: "description",
                            property: "og:description",
                            content: seo.description
                        },
                        { property: "og:title", content: seo.title },
                        { property: "og:url", content: seo.url },
                    ]}
                />
                {/*<Breadcrumbs title="About" description="Who we are " />*/}

                <h2 className="text-center mt-4">Advices</h2>
                <div className="container-fluid mt-3">
                    <div className="section">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card box-shadow">
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control"
                                                           placeholder="Advice"/>
                                                </div>

                                                <div className="col">
                                                    <input type="submit" className="form-control btn btn-primary" value="Add Advice"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Advice</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sleep eight hours</td>
                            <td><span className="btn btn-danger">Delete</span></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Eat properly</td>
                            <td><span className="btn btn-danger">Delete</span></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Morning walk</td>
                            <td><span className="btn btn-danger">Delete</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps
)(Advice);