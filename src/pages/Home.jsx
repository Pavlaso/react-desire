import React from "react";
import Slider from "react-slick";

import image1 from "./../images/1home.jpg";
import image2 from "./../images/2home.jpg";
import image3 from "./../images/3home.jpg";
import image4 from "./../images/4home.jpg";
import image5 from "./../images/5home.jpg";

import furniture1 from "./../images/furniture1.jpg";
import furniture2 from "./../images/furniture2.jpg";
import furniture3 from "./../images/furniture3.jpg";
import furniture4 from "./../images/furniture4.jpg";
import furniture5 from "./../images/furniture5.jpg";

import icon1 from "./../images/icon1.svg";
import icon2 from "./../images/icon2.svg";
import icon3 from "./../images/icon3.svg";

import imageBox1 from "./../images/blog-box1.jpg";
import imageBox2 from "./../images/blog-box2.jpg";
import slider1 from "./../images/Group.png";

import { Buttons } from '../components/Buttons';
import { Footer } from './../components/footer';
import { Header } from './../components/header';
import { NewColection } from '../components/newCollection';


 const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "activaSlide"
      };

    return <div className="main">
        <Header/>
        <div className="chearContainer">
            <section className="top">
                <div className="top__inner">
                    <div className="top__slider">
                    <Slider {...settings}>
                        <div className="top__slider-item">
                            <img className="top__slider-img" src={slider1} alt="slider"/>
                            <div className="top__slide-info">
                                <h2 className="top__slider-title">
                                    Furniture collection
                                </h2>
                                <p className="top__slider-text">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. 
                                Aesthetic lyft ethical drinking vinegar austint
                                </p>
                            </div>
                        </div>
                        <div className="top__slider-item">
                            <img className="top__slider-img" src={slider1} alt="slider"/>
                            <div className="top__slide-info">
                                <h2 className="top__slider-title">
                                    Furniture collection
                                </h2>
                                <p className="top__slider-text">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. 
                                Aesthetic lyft ethical drinking vinegar austint
                                </p>
                            </div>
                        </div>
                        <div className="top__slider-item">
                            <img className="top__slider-img" src={slider1} alt="slider"/>
                            <div className="top__slide-info">
                                <h2 className="top__slider-title">
                                    Furniture collection
                                </h2>
                                <p className="top__slider-text">
                                Deep v you probably haven't heard of them banh mi synth actually affogato. 
                                Aesthetic lyft ethical drinking vinegar austint
                                </p>
                            </div>
                        </div>
                      </Slider>
                    </div>
                </div>
            </section>
        </div>
        <NewColection  image1={image1} image2={image2} image3={image3} image4={image4} image5={image5}/>
        <section className="decor">
            <div className="container">
                <h2 className="decor__title">
                    Aesthetic <br/>ethical drinking
                </h2>
                <p className="decor__text">
                Deep v you probably haven't heard of them banh mi synth actually affogato.
                Artlyft ethical the one drinking vinegar austint
                </p>
            </div>
        </section>
        <section className="works-path">
            <div className="container">
                <h3 className="works-path__title">
                    How it works
                </h3>
                <div className="works-path__items">
                    <div className="works-path__items-box">
                        <div className="works-path__item">
                            <img className="works-path__item-img works-path__item--consultation" src={icon1} alt="icon"/>
                            <h6 className="works-path__item-title">Designer Consultation</h6>
                            <p className="works-path__item-text ">
                                Kinfolk scenester authentic craft 
                                beer truffaut irony intelligentsia 
                                YOLO lomo bushwick coloring 
                                book. Semiotics man bun venmo 
                                viral cliche
                            </p>
                        </div>
                        <div className="works-path__item works-path__item--production">
                            <img className="works-path__item-img" src={icon2} alt="icon" />
                            <h6 className="works-path__item-title">Production</h6>
                            <p className="works-path__item-text ">
                                Copy Everyday carry actually neutra 
                                authentic kogi shabby chic
                            </p>
                        </div>
                    </div>
                    <div className="works-path__item works-path__item--measurements">
                        <img className="works-path__item-img" src={icon3} alt="icon"/>
                        <h6 className="works-path__item-title">Measurements</h6>
                        <p className="works-path__item-text ">
                            Intelligentsia YOLO lomo 
                            bushwick coloring book. 
                            Semiotics man bun venmo 
                            viral cliche
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="gallery">
            <div className="container-fluid">
                <Buttons/>
                    <div className="gallery__items">
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={furniture1} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={furniture2} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={furniture3} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={furniture4} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={furniture5} alt="furniture" /> 
                            </a>
                    </div>
                </div>
            </div>
            <section className="blog-box">
                <div className="container">
                    <h2 className="blog-box__title">
                        More inspiration ideas in our blog
                    </h2>
                    <div className="blog-box__items">
                        <div className="blog-box__item">
                            <a className="blog-box__img-link" href="#" >
                                <img src={imageBox1} alt="blog-image" className="blog-box__img" />
                            </a>
                            <div className="blog-box__links">
                                <span className="blog-box__data">March 12, 2020 </span> |
                                <a className="blog-box__name" href="#">by Ann Summers </a> |
                                <a className="blog-box__author" href="#">Inrerior </a>
                            </div>
                            <a className="blog-box__item-title-link" href="#" >
                                <h4 className="blog-box__item-title">
                                    Listicle actually selvage activated charcoal for the drinking vinegar
                                </h4>
                            </a>
                        </div>
                        <div className="blog-box__item">
                            <a className="blog-box__img-link" href="#" >
                                <img src={imageBox2} alt="blog-image" className="blog-box__img" />
                            </a>
                            <div className="blog-box__links">
                                <span className="blog-box__data">September 28,2020 </span> |
                                <a className="blog-box__name" href="#">by Finnagan Morningstar</a> |
                                <a className="blog-box__author" href="#" > Dining room interior</a>
                            </div>
                            <a className="blog-box__item-title-link" href="#" >
                                <h4 className="blog-box__item-title">
                                    Red selfies edison bulb four dollar toast humblebrag
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        
}
export default Home;