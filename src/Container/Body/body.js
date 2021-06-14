import React, { Component } from 'react';
import Header from '../../Component/Menu/header'
import Banner from '../../Component/Banner/banner';
import Dashboard from '../Disease-dashboard/dashboard';
import Hospital from '../Hospitals/hospital';
import HospitalList from '../Hospitals/hospital-list';


class Body extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Dashboard/>
            </div>
        )
    }
}



export default Body