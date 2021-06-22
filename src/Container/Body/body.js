import React, { Component } from 'react';
import Header from '../../Component/Menu/header'
import Banner from '../../Component/Banner/banner';
import Dashboard from '../Disease-dashboard/dashboard';
import Hospital from '../Hospitals/hospital';
import HospitalList from '../Hospitals/hospital-list';
import Fact from '../../Component/Facts/facts';
import Tips from '../../Component/P-Tips/p-tips'


class Body extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Dashboard/>
                <Fact/>
                <Tips/>
            </div>
        )
    }
}



export default Body