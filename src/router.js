import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/private-route/PrivateRoute";
import PrivateRouteMentor from "./components/private-route/PrivateRouteMentor";
import PrivateRouteAdmin from "./components/private-route/PrivateRouteAdmin";

import Patient from "./components/patient/Patient";
import PatientDetails from "./components/patient/PatientDetails";

import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import About from "./components/about/About";
import Navbar from "./components/layout/Navbars";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import ForgotPass from "./components/forgotPass/ForgotPass";
import Contact from "./components/contact/Contact";
import ComingSoon from "./components/comingSoon/ComingSoon";
import ChiefComplaint from "./components/template/chiefComplaint";
import Advice from "./components/template/advice";
import Drug from "./components/template/drug";
import Encounters from "./components/patient/encounters";
import AddEncounter from "./components/patient/addEncounter";

export default function PathRoute() {
  return (
    <Switch>
      <React.Fragment>
        <Navbar />
        <main className="no-padding">
          <Route exact path="/" component={Landing} />
          {/*<Route exact path="/patient" component={Patient} />*/}

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgotpass" component={ForgotPass} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={Contact} />

          <Route exact path="/chiefComplaint" component={ChiefComplaint} />
          <Route exact path="/advice" component={Advice} />
          <Route exact path="/drug" component={Drug} />


          <PrivateRoute exact path="/patient" component={Patient} />
          <PrivateRoute exact path="/patient/:id" component={PatientDetails} />
          <PrivateRoute exact path="/encounter/:patientId/:admissionId" component={Encounters} />
          <PrivateRoute exact path="/add/encounter/:admissionId" component={AddEncounter} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

        </main>
        <Footer />
      </React.Fragment>
    </Switch>
  );
}