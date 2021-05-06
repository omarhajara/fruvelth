import React, { Component } from 'react';
import Banner from '../../Component/Banner/banner';
import Dashboard from '../Disease-dashboard/dashboard';
import Hospital from '../Hospitals/hospital';
import HospitalList from '../Hospitals/hospital-list';


class Body extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Dashboard/>
            </div>
        )
    }
}



export default Body