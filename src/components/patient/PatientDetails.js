import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import axios from 'axios';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';

// import Breadcrumbs from "../layout/Breadcrumbs";

class patientDetails extends Component {
    constructor() {
        super();
        this.state = {
            patient : {},
            admission:[]
        }
    }

    componentDidMount() {
        this.getPatientDetails();
        this.allAdmission();
    }

    getPatientDetails = async () => {
        await axios.get(`/api/patient/details/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    patient: res.data
                })
            })
            .catch( error => {
                console.log(error)
            })
    }

    allAdmission = async () => {
        await axios.get(`/api/patient/admission/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    admission: res.data
                })
            })
            .catch( error => {
                console.log(error)
            })
    }

    render() {
        const {patient,admission} = this.state;
        console.log("userid",this.state.admission)
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

                <div className="container-fluid mt-3">
                    <div className="section">
                        <h4 className="text-center"><b><span>{this.state.patient.name} </span>
                            {this.state.patient.sex === "Male" ? <i className="fas fa-mars text-primary"></i> : <i className="fas fa-venus text-success"></i>}
                        </b></h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-info text-white text-center">
                                        <b>Basic Information</b>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4"><b>Name  </b></div>
                                            <div className="col-md-8"><p>: {this.state.patient.name}</p></div>

                                            <div className="col-md-4"><b>Address  </b></div>
                                            <div className="col-md-8"><p>: {this.state.patient.address}</p></div>

                                            <div className="col-md-4"><b>Mobile  </b></div>
                                            <div className="col-md-8"><p>: {this.state.patient.mobile}</p></div>

                                            <div className="col-md-4"><b>Address </b></div>
                                            <div className="col-md-8"><p>: {this.state.patient.address}</p></div>

                                            <div className="col-md-4"><b>Gender  </b></div>
                                            <div className="col-md-8"><p>: {this.state.patient.sex}</p></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-success text-white text-center">
                                        <b>Admissions</b>
                                    </div>
                                    <div className="card-body">
                                        {
                                            admission.length >0 && admission.map((admission,key) =>
                                                <p>Hey</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
)(patientDetails);