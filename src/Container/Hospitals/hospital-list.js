import React from 'react';
import './hospital.scss';
import Hospital from './hospital';


const HospitalList = ({hospitals}) => (
    <div className='hospital'>
        <h3 className='h3'>Top Specialized Hospitals...</h3>
        <div className='hospitals'>
        {
            hospitals.map(item => (
                <Hospital key={item.id} name={item.name} description={item.description} location={item.Location} />
            ))
        }
        </div>
    </div> 

);

export default HospitalList;
