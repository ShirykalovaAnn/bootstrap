import React from 'react';
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={420} height={800}
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <Link exact to={'/form'}>
              <Button variant="primary">
                  Обратная связь
              </Button>
          </Link>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={800}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Покатушки</h3>
          <p>Лучше гор, могут быть только горы</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={800}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Вулкан</h3>
          <p>Ночное восхождение и встреча рассвета</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider