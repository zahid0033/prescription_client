import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import axios from 'axios';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';
import moment from "moment";
import empty from "is-empty"

// import Breadcrumbs from "../layout/Breadcrumbs";

class Encounters extends Component {
    constructor() {
        super();
        this.state = {
            patient: {},
            admission: {}
        }
    }

    componentDidMount() {
        this.getPatient();
        this.fetchAdmission()

    }

    getPatient = async () => {
        await axios.get(`api/patient/details/${this.props.match.params.patientId}`)
            .then(res => {
                this.setState({
                    patient : res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchAdmission = async () => {
        await axios.get(`api/patient/admission/details/${this.props.match.params.admissionId}`)
            .then(res => {
                this.setState({
                    admission : res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        console.log("doctr",empty(this.state.admission))
        const {patient,admission} = this.state;
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

                <div className="container mt-3">
                    <div className="section">
                        <div className="card">
                            <div className="card-header text-center bg-info text-white">
                                Patient's Information
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><b>Name</b> : {patient.name}</p>
                                        <p><b>Age</b> : {patient.age}</p>
                                        <p><b>Address</b> : {patient.address}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><b>Blood Group</b> : {patient.blood_group}</p>
                                        <p><b>Gender</b> : {patient.sex}</p>
                                        <p><b>Mobile</b> : {patient.mobile}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-center bg-success text-white">
                                    Admission
                                </div>
                                <div className="card-body">
                                    {
                                        empty(admission) === false ?
                                            <>
                                                <p><b>Joining Date </b>: { moment(admission.join_date).format('DD-MMM-YYYY')}</p>
                                                <p className="text-success"><b>By :</b> {admission.doctor_id.name}</p>
                                            </>
                                            :
                                            ''
                                    }

                                    {/*<p className="text-success"><b>By :</b> {admission.doctor_id.name}</p>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-center bg-secondary text-white">
                                    Encounters
                                </div>
                                <div className="card-body">
                                    <p className="text-center"><Link to={`/add/encounter/${admission._id}`} className='btn btn-primary'><i className="fas fa-plus-square"></i> Add More Encounters</Link></p>
                                    {/*<p className="text-center"><Link to={`/patient`} className='btn btn-primary'><i className="fas fa-plus-square"></i> Add More Encounters</Link></p>*/}
                                    {/*<p className="text-success"><b>By :</b> {admission.doctor_id.name}</p>*/}
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
)(Encounters);