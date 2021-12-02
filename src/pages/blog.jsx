import { Aside } from "../components/aside"
import { BreadCrumbs } from "../components/breadcrumbs"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import React from 'react'
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";

import room1 from './../images/blog-room1.jpg'
import room2 from './../images/blog-room2.jpg'
import slider from './../images/blog-slider.jpg'
import playBtn from './../images/play_button.svg'

import arrowLeft from './../images/arrow-left.svg'
import arrowRight from './../images/arrow-right.svg'

import arrow_slider_left from './../images/arrow-slider-left.svg'
import arrow_slidder_right from './../images/arrow-slider-right.svg'

export const Blog = () => {
    const settings = {
        prevArrow: <button type="button" className="slick-prev"><img src={arrow_slider_left} alt="arrow left" /></button>,
        nextArrow: <button type="button" className="slick-prev"><img src={arrow_slidder_right} alt="arrow right" /></button>
      };
    const [isOpen, setOpen] = React.useState(false)
    return <div>      
        <Header/>
        <BreadCrumbs/>
        <section className="blog">
            <div className="container">
                <div className="blog__inner">
                    <div className="blog__items">

                        <div className="blog__item">
                            <img className="blog__item-image" src={room1} alt="room" />
                            <div className="blog__information">
                                <span className="blog__information-data">August 15, 2020</span> |
                                <a className="blog__information-author" href="#">by Ann Summers</a> |
                                <span className="blog__information-type">Bedroom Furniture</span>
                            </div>
                            <h2 className="blog__item-title">
                                Red selfies edison bulb four dollar toast humblebrag for the furniture
                            </h2>
                            <p className="blog__item-text">
                                Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. 
                                Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun 
                                copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring
                                book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                            </p>
                        </div>

                        <div className="blog__blockquote-container">
                            <blockquote className="blog__blockquote">
                                “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                            </blockquote>
                            <div className="blog__blockquote-name">
                                Paul Rand
                            </div>
                        </div>

                        <div className="blog__item article-vidio">
                            <div className="blog__video">
                                <React.Fragment>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="zPX50wz42ig" onClose={() => setOpen(false)} />

                                    <button className="about__btn-primary" onClick={()=> setOpen(true)}>
                                        <img className='about__popup-imgbtn' src={playBtn} alt="play button" />
                                    </button>
                                </React.Fragment>
                            </div>
                        <div className="blog__information">
                            <span className="blog__information-data">August 12, 2020</span> |
                                <a className="blog__information-author" href="#">by Lux Morningstar</a> |
                            <span className="blog__information-type">Bedroom Furniture</span>
                        </div>

                        <h2 className="blog__item-title">
                            Authentic kogi shabby chic
                        </h2>

                        </div>

                        <div className="blog__item article-slider">
                            <div className="blog__slider">
                                <Slider {...settings}>
                                        <div className="blog__item-slider">
                                            <img className="blog__item-image" src={slider} alt="furniture"/>
                                        </div>
                                        <div className="blog__item-slider">
                                            <img className="blog__item-image" src={slider} alt="furniture"/>
                                        </div>
                                        <div className="blog__item-slider">
                                            <img className="blog__item-image" src={slider} alt="furniture"/>
                                        </div>
                                    </Slider> 
                            </div>
                            <div className="blog__information">
                                <span className="blog__information-data">August 18, 2020 </span> |
                                <a className="blog__information-author" href="#">by Lux Morningstar</a> |
                                <span className="blog__information-type">Table Furniture</span>
                            </div>
                            <h2 className="blog__item-title">
                                Semiotics fixie four dollar toast, next level woke
                            </h2>
                            <p className="blog__item-text">
                                Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer.
                                Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun
                                copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring
                                book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                            </p>
                        </div>
                        <div className="pagination">
                            <a className="pagination__arrow pagination__arrow--disabled" href="#">
                                <img className="paggination__arrow-link" src={arrowLeft} alt="arrow"  />         
                            </a> 
                            <ul className="pagination__list">
                                <li className="pagination__item">
                                    <a className="pagination__num pagination__num--active" href="#">1</a>
                                </li>
                                <li className="pagination__item">
                                    <a className="pagination__num" href="#">2</a>
                                </li>
                            </ul>
                            <a className="paggination__arrow" href="#">
                                <img className="paggination__arrow-link" src={arrowRight} alt="arrow"  /> 
                            </a>
                        </div>
                    </div>
                    <Aside/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}