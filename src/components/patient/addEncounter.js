import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import axios from 'axios';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';

// import Breadcrumbs from "../layout/Breadcrumbs";

class addEncounter extends Component {
    constructor() {
        super();
        this.state = {
            patients : []
        }
    }


    componentDidMount() {
    }

    render() {
        const seo = {
            title: "Prescription : patients",
            description:
                "About patients.",
            url: "https://Prescription.com/patient/",
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
                        <h4 className="text-center">
                            <b>Add Encounter</b>
                        </h4>

                        <p className="btn btn-primary"><i className="fas fa-plus-square"></i> Add Patient</p>

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
)(addEncounter);