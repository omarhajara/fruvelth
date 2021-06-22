import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../../Assets/img1.png';
import Img2 from '../../Assets/img2.jpeg';
import './banner.scss'


class CarouselImg extends React.Component {
  render() {
    return (
      <Carousel fade>
          <Carousel.Item className='Carousel'>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className='Carousel'>
            <img
              className="d-block w-100"
              src={Img2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className='Carousel'>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
          </Carousel.Item>
     
    </Carousel>
    );
  }
}


export default CarouselImg;