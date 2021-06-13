import React from 'react';
import './diseases.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Disease = ({title}) => (
    <div className='disease-card'>
        <Link to="d-details">
            <button>{title}</button>
        </Link>
    </div>
);



export default Disease;
 