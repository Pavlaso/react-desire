import { BreadCrumbs } from "../components/breadcrumbs"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

import email from './../images/envelope.svg'
import facebook from './../images/facebook.svg'
import instagram from './../images/instagram.svg'
import pinterest from './../images/Pinterest.svg'
import whatsapp from './../images/whatsapp.svg'
import youtube from './../images/youtube.svg'
import { SliderBox } from "../components/slider-box";

export const Contact = () => {
    return <div className='mine'>
        <Header />
        <BreadCrumbs/>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10082.694724828918!2d-122.41598141730512!3d37.800647032359805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2zNzI1IEdyZWVuIFN0LCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEzMywg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1633965252987!5m2!1sru!2sru" 
                width="100%" height="578" style={{border:"0"}} allowfullscreen="" loading="lazy"/>
        </div> 
        <section className="content">
            <div className="container">
                <h2 className="content__title">
                    Contact Us
                </h2>
                <div className="content__content">
                    <ul className="content__social-networks">
                        <li className="content__social-item">
                            <a className="content__social-link" href="#" >
                                <img src={facebook} alt="social network" className="content__network" />
                            </a>
                        </li>
                        <li className="content__social-item">
                            <a className="content__social-link" href="#" >
                                <img src={instagram} alt="social network" className="content__network" />
                            </a>
                        </li>
                        <li className="content__social-item">
                            <a className="content__social-link" href="#" >
                                <img src={pinterest} alt="social network" className="content__network" />
                            </a>
                        </li>
                        <li className="content__social-item">
                            <a className="content__social-link" href="#" >
                                <img src={whatsapp} alt="social network" className="content__network" />
                            </a>
                        </li>
                        <li className="content__social-item">
                            <a className="content__social-link" href="#" >
                                <img src={youtube} alt="social network" className="content__network" />
                            </a>
                        </li>
                    </ul>
                    <p className="content__text">
                        Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street 
                        art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack 
                        normcore.Lo-fi pop-up banjo portland, echo park hammock
                    </p>
                    <div className="contact__adress">
                        <a className="content__phone" href="tel:+14158297934">(415) 829-7934</a>
                        <div className="content__st">725 Green St</div>
                        <div className="content__sity">San Francisco, California(CA), 94133</div>
                    </div>
                    
                    <a className="info-email" href="mailto:ouremailaddress@email.com"><img className="" src={email} /> ouremailaddress@email.com</a>

                    <form className="content__form">
                        <div className="content__form-input-container">
                            <input type="text" placeholder='You name' className="content__form-input" />
                            <input type="text" placeholder='You e-mail' className="content__form-input" />
                        </div>
                        <textarea type="text" placeholder='You message' className="content__form-area" />
                        <button type="submit" className="content__form-btn">Send</button>
                    </form>
                </div>
            </div>
        </section>
        <div className="contact-slider__wrapper">
            <div className="container-fluid">
                <SliderBox />
            </div>
        </div>
        <Footer />
    </div>
}