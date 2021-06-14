import React from 'react';
import './diseases.scss';
import Diseases from './diseases';



const DiseaseList = ({illness}) => (
    <div className='d-list'>
        <h3>Top Searched Diseases...</h3>
        <div className='scroll'>
        {
            illness.map(disease => (
                <Diseases key={disease.id} title={disease.title} />
            ))
        }
        </div>
    </div> 

);

export default DiseaseList;