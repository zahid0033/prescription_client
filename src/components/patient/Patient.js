import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet'
import {Link} from "react-router-dom";
// import Breadcrumbs from "../layout/Breadcrumbs";

class Patient extends Component {
    render() {
        const seo = {
            title: "Prescription : patients",
            description:
                "About patients.",
            url: "https://Prescription.com/about/",
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

                <div className="container">
                    <div className="section">
                        <h4 className="center-align">
                            About<b> Patients</b>
                        </h4>
                        <Link to="/patients">Patients</Link>
                        <blockquote>
                            <p>মেডিবি দেশের অন্যতম সেরা অনলাইনভিত্তিক মেডিক্যাল শিক্ষামূলক প্ল্যাটফর্ম পাঠক্রম সংক্রান্ত কার্যক্রম সম্পাদনায় নিরিলসভাবে কাজ করে যাচ্ছে।</p>
                            <p>এছাড়াও আমরা অনলাইন ক্লিনিক্যাল ওয়ার্শপ, দক্ষতামূলক প্রশিক্ষণ, স্বাস্থ্য সচেতনতা ক্যাম্প, ক্যারিয়ার সেমিনারের মত নানা শিক্ষার্থী সহায়ক প্রোগ্রাম করে থাকি।</p>
                            <p>পৃথিবীর নানা সমসাময়িক দেশের প্রতিটি শিক্ষার্থীদের মাঝে পৌছে দিতে আমরা বদ্ধপরিকর।</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps
)(Patient);