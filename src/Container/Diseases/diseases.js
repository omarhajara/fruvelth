import React from 'react';
import './diseases.scss';


const Disease = ({title, id, onDiseaseSelect}) => (
    <div className='disease-card'>
        <button onClick={() => onDiseaseSelect(id)}>{title}</button>
    </div>
);



export default Disease;
 