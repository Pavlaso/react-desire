import Slider from "react-slick";

import slider1 from './../images/ContactSlider/slider1.jpg'
import slider2 from './../images/ContactSlider/slider2.jpg'
import slider3 from './../images/ContactSlider/slider3.jpg'
import slider4 from './../images/ContactSlider/slider4.jpg'
import slider5 from './../images/ContactSlider/slider5.jpg'
import slider6 from './../images/ContactSlider/slider6.jpg'
import slider7 from './../images/ContactSlider/slider7.jpg'
import slider8 from './../images/ContactSlider/slider8.jpg'
import slider9 from './../images/ContactSlider/slider9.jpg'
import slider10 from './../images/ContactSlider/slider10.jpg'

export const SliderBox = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };
      const arr = 
        [
          {url: slider1, text: 'Truffaut literally trust'},
          {url: slider2, text: 'Truffaut literally trust'},
          {url: slider3, text: 'Truffaut literally trust'},
          {url: slider4, text: 'Truffaut literally trust'},
          {url: slider5, text: 'Truffaut literally trust'},
          {url: slider6, text: 'Truffaut literally trust'},
          {url: slider7, text: 'Truffaut literally trust'},
          {url: slider8, text: 'Truffaut literally trust'},
          {url: slider9, text: 'Truffaut literally trust'},
          {url: slider10, text:'Truffaut literally trust'}
        ]
    return  <div className="container-fluid">
        <Slider {...settings}>
            {arr.map((item, index) => <a className="contact-slider__link" href='#' key={index + item.url}>
                    <div className="contact-slider__item">
                        <img className="contact-slider__image" src={item.url} alt="furniture" />
                        <p className="contact-slider__title">{item.text}</p>
                    </div>
                </a>)
            }
        </Slider>
    </div>
}