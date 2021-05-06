import React from 'react';
import './hospital.scss';
import Img from '../../Assets/img1.png'

const Hospital = ({name, description, location}) => (
    <div className="hosp">
        <div className='hos'>
            <div className='hospital-list'>
                <div className='hospital-img'>
                    <img src={Img} />
                </div>
                <div className='hospital-text'>
                    <h2>{name}</h2>
                    <p> {description} </p>
                    <h3>{location}</h3>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    </div>
);
export default Hospital;