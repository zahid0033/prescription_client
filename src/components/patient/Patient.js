import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
import axios from 'axios';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';

// import Breadcrumbs from "../layout/Breadcrumbs";

class Patient extends Component {
    constructor() {
        super();
        this.state = {
            patients : []
        }
    }


    componentDidMount() {
        this.getAllPatient();
    }

    onRowClick(data) {
        console.log("filter",data)
        // this.props.history.push(`/patient/${data._id}`);
        // this.props.location(`/patient/${data._id}`)
    }

    populateTable = () => {
        const tableHeaders = [
            { prop: 'name', title: 'Name', sortable: true, filterable: true },
            { prop: 'address', title: 'Address', sortable: true, filterable: true },
            { prop: 'age', title: 'Age', sortable: true, filterable: true },
            { prop: 'mobile', title: 'Mobile', sortable: true, filterable: true },
            { prop: 'blood_group', title: 'Blood Group', sortable: true, filterable: true }
        ];
        // tableBody = [{ name: 'Jack', score: 100 }, { name: 'Sam', score: 55 },{ name: 'Jack', score: 100 }, { name: 'Sam', score: 55 },{ name: 'Jack', score: 100 }, { name: 'Sam', score: 55 },{ name: 'Jack', score: 100 }, { name: 'Sam', score: 55 },{ name: 'Jack', score: 100 }, { name: 'Sam', score: 55 }];
        const tableBodys = this.state.patients
        const classes = {
            table: 'table-striped table-hover table-bordered',
            theadCol: css`
                .table-datatable__root & {
                  &.sortable {
                    color: white;
                    background: #17a2b8;
                  }
                }
              `,
                        tbodyRow: css`
                {
                  cursor: pointer;
                }
              `,
                        paginationOptsFormText: css`
                &:first-of-type {
                  padding-bottom: 20px;
                  margin-right: 8px;
                }
                &:last-of-type {
                  margin-left: 8px;
                }
            `
        };

        return (
            <div className="table-responsive">
                <Datatable
                    tableHeaders={tableHeaders}
                    tableBody={tableBodys}
                    rowsPerPage={5}
                    rowsPerPageOption={[5, 10, 15, 20]}
                    initialSort={{ prop: 'name', isAscending: true }}
                    classes={classes}
                    onRowClick={(data) => this.props.history.push(`/patient/${data._id}`) }
                />
            </div>
            )


    }

    getAllPatient = async () => {
        await axios.get(`/api/patient`)
            .then(res => {
                this.setState({
                    patients: res.data
                })
            })
            .catch( error => {
                console.log(error)
            })
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

                <div className="container-fluid mt-3">
                    <div className="section">
                        <h4 className="text-center">
                            <b> Patients</b>
                        </h4>

                        <p className="btn btn-primary"><i className="fas fa-plus-square"></i> Add Patient</p>
                        <p>Search Patient</p>
                        {this.populateTable()}

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
)(Patient);