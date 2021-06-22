import React from 'react';
import './diseases.scss';
import HospitalList from '../Hospitals/hospital-list';
import Img from '../../Assets/img1.png';
import Diabetes from '../../Assets/diabetes.png';


// import '../Disease-dashboard/illness';

const DiseaseDetail = ({id, title}) => {
    return (
        <div key={id}>
            <div className='disease-detail'>
                <div className='top-detail'>
                    <div className='d-icon'>
                        <img src={Diabetes} alt='...' />
                    </div>
                    <div className='d-text'>
                        <h2>{title}</h2>
                        <p>vv we are spec in so so so  we are specialize in so so so we are specialize in so so so we are specialize in so so so  we are specialio so so specialize in so so
                            we are specialize</p>
                    </div>
                </div>
                <div className='h-scroll'>
                    <HospitalList hospitals={hospitals} />
                </div>
            </div>
        </div>
    );
}

export default DiseaseDetail;


var hospitals = [
    {
        id: 1,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 2,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 3,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 4,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    },
    {
        id: 5,
        name: "Cancer Institute",
        description: "we are specialize in so so so we are specialize in so so s we are specialize in so so so",
        diseases: [

        ],
        Location: "Lagos Nigeria",
        Email: "uucancer@gmail.com",
        Website: "www.cancerins.com",
        contact: "090100psoikas"
    }
]
