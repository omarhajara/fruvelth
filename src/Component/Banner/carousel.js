import React from 'react';
import Carousel from 'nuka-carousel';
import Img1 from '../../Assets/img1.png';


class CarouselImg extends React.Component {
  render() {
    return (
      <Carousel>
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
        <img src={Img1} />
      </Carousel>
    );
  }
}


export default CarouselImg;