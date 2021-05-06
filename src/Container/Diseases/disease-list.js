import React from 'react';
import './diseases.scss';
import Diseases from './diseases';



const DiseaseList = ({illness, onDiseaseSelect}) => (
    <div className='d-list'>
        <h3>Top Searched Diseases...</h3>
        <div className='scroll'>
        {
            illness.map(disease => (
                <Diseases key={disease.id} title={disease.title} onDiseaseSelect={onDiseaseSelect}/>
            ))
        }
        </div>
    </div> 

);

export default DiseaseList;