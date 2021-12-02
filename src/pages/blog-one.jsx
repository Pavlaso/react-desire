import { Aside } from "../components/aside"
import { BreadCrumbs } from "../components/breadcrumbs"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import React from 'react'

import room1 from './../images/blog-room1.jpg'
import first_ava from './../images/first_ava.png'

export const BlogOne = () => {
    return <div>      
        <Header/>
        <BreadCrumbs/>
        <section className="blog blog-one">
            <div className="container">
                <div className="blog__inner">
                <div className="blog__items">
                        <div className="blog__item blog-one__item">
                            <img className="blog__item-image" src={room1} alt="room" />
                            <div className="blog__information">
                                <span className="blog__information-data">August 15, 2020</span> |
                                <a className="blog__information-author" href="#">by Ann Summers</a> |
                                <span className="blog__information-type">Bedroom Furniture</span>
                            </div>
                            <h3 className="blog__item-title">
                                Red selfies edison bulb four dollar toast humblebrag for the furniture
                            </h3>
                            <p className="blog__item-text blog-one__text">
                                Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. 
                                Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun 
                                copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring 
                                book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table.
                                Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware 
                                pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic 
                                craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                                bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan 
                                street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa
                                kogi whatever swag pop-up seitan.
                            </p>
                       
                            <blockquote className="blog-one__blockquote">
                                “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                            </blockquote>
                            <div className="blog-one__blockquote-name">Paul Rand</div>
                            
                            <p className="blog-one__text">
                                Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard 
                                thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison
                                bulb farm-to-table.Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo 
                                mumblecore vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, 
                                kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick 
                                coloring book. Semiotics man bun venmo viral cliche. Tousled yr williamsburg austin 
                                edison bulb cloud bread vegan street art. Locavore food truck trust fund palo santo 
                                asymmetrical, franzen deep v marfa kogi whatever swag pop-up seitan.
                            </p>
        
                            <div className="blog-one__tags">
                                <h5 className="blog-one__tags-title">Tags</h5>
                                <a className="blog-one__tags-item" href="#">Bedroom furniture</a>
                                <a className="blog-one__tags-item" href="#">Office furniture</a>
                                <a className="blog-one__tags-item" href="#">Dining room futniture</a>
                                <a className="blog-one__tags-item" href="#">Chair</a>
                            </div>
                            <div className="blog-one__item-links-container">
                                <div className="blog-one__item-links">
                                    <a className="blog-one__item-link blog-one__link-prev" href="#">
                                        Cred selfies edison bulb four dollar toast humblebrag
                                    </a>
                                    <a className="blog-one__item-link blog-one__link-next" href="#">
                                        Semiotics fixie four dollar toast, next level
                                    </a>
                                </div>
                            </div>
                            <div className="blog-one__coments">
                                <h3 className="blog-one__coments-title">Comments:</h3>
                                <div className="blog-one__first-coment">
                                    <img className="blog-one__first-coment-ava" src={first_ava} alt="avtar"/>
                                    <div className="blog-one__first-coment-post">
                                        <h5 className="blog-one__first-coment-name">Lea Brown</h5>
                                        <div className="blog-one__first-coment-data">August 12, 2020</div>
                                        <p className="blog-one__first-coment-taxt">
                                            Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
                                            intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral
                                            cliche
                                        </p>
                                    </div>
                                    <div className='blog-one__first-coment-reply'>Reply</div>
                                </div>
                                <div className="blog-one__block-form">
                                    <h4 className="blog-one__set-coment-title">
                                        Post a Comment
                                    </h4>
                                    <form className="blog-one__form">
                                        <textarea className="blog-one__form-textarea" placeholder='Your comment'/>
                                        <div className="blog-one__form-input-container">
                                            <input className="blog-one__form-input" type="text" placeholder='Your name' />
                                            <input className="blog-one__form-input" type="text" placeholder='Your e-mail' />
                                        </div>
                                        <div className="blog-one__form-checkbox-container">
                                            <input className="blog-one__form-checkbox" type="checkbox" /> 
                                            <span>Remember me</span>
                                        </div>
                                        <button className="blog-one__form-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Aside/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}