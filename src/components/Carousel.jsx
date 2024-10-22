import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



function CarouselFadeExample() {
  return (
    <Carousel fade className='flex flex-col justify-center mx-auto h-[500px]'>
      <Carousel.Item className='bg-[#ae1a30]' >
        <img className=' mx-auto' src="https://www.urbanflowers.co.th/wp-content/uploads/2023/02/burninglovehandheld.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-[#d5ac7e]' >
      <img  className=' mx-auto' src="https://www.urbanflowers.co.th/wp-content/uploads/2023/03/hepburnhandheld.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-[#3981a1]'>
      <img  className=' mx-auto' src="https://www.urbanflowers.co.th/wp-content/uploads/2023/02/pegasushandheld.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-[#d5ac7e]' >
      <img  className=' mx-auto' src="https://www.urbanflowers.co.th/wp-content/uploads/2023/02/casablancahandheld.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;