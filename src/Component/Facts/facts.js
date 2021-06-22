import React from 'react';
import './facts.scss';
import FactCarousel from './fact-carousel';


class Fact extends React.Component {
    render() {
        return (
            <div className='fact'>
                <div className='fact-header'>
                    <h2>Did You Know</h2>
                </div>
                <div className='fact-text'>
                    <FactCarousel/>
                </div>
                
            </div>
            
        );
    }
}





export default Fact;