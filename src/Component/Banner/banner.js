import React from 'react';
import './banner.scss';
import CarouselImg from './carousel';


class Banner extends React.Component{
    render() {
        return (
            <div className='banner'>
                <div className='banner-img'>
                    <CarouselImg/>
                </div>
                <div className='banner-text'>
                    <h1>In search of a hospital</h1>
                    <p>Are you looking for a hospital specialized
                        in your illness?
                        long long time ago to d moon
                    </p>
                </div>
            </div>
            
        );
    }
}





export default Banner