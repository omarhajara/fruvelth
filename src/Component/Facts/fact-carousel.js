import React from 'react'
import { Carousel } from 'react-bootstrap';

class FactCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item className="fact-text"> 
                        <p>Nulla vitae elit libero, a pharetra augue
                                mollis interdum. Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item className="fact-text">
                        <p>Nulla vitae elit libero, a pharetra augue
                            mollis interdum. Nulla vitae elit libero, a pharetra augue
                            mollis interdum.Nulla vitae elit libero, a pharetra augue
                            mollis interdum.Nulla vitae elit libero, a pharetra augue
                            mollis interdum.Nulla vitae elit libero, a pharetra augue
                            mollis interdum.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item className="fact-text">
                            <p>Nulla vitae elit libero, a pharetra augue
                                mollis interdum. Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.Nulla vitae elit libero, a pharetra augue
                                mollis interdum.
                            </p>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}


export default FactCarousel;
