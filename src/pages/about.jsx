import { BreadCrumbs } from '../components/breadcrumbs';
import { Footer } from './../components/footer';
import { Header } from './../components/header';
import playBtn from './../images/play_button.svg'
import ModalVideo from 'react-modal-video'
import React, {useState} from 'react'
import inspirationIMG from './../images/inspiration_chair.png'
import { NewColection } from '../components/newCollection';

import part1 from './../images/part-1.svg'
import part2 from './../images/part-2.svg'

import collection1 from './../images/collection1.jpg'
import collection2 from './../images/collection2.jpg'
import collection3 from './../images/collection3.jpg'
import collection4 from './../images/collection4.jpg'
import collection5 from './../images/collection5.jpg'

export const About = () => {

    const [isOpen, setOpen] = useState(false)
    return <div className='main'>
        <Header/>
            <BreadCrumbs/>
        <section className="about">
                <div className="about__prev"> 
                        <h2 className="about__prev-title">
                            About Us
                        </h2>
                </div>
                <div className="about__content">
                    <div className="container">
                        <h3 className="about__title">
                            Balance in the simple through an informed marriage of design, functional and craft
                        </h3>
                        <div className="about__text">
                            <p>
                                Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin
                                coffee street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper 
                                mug marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave 
                                literally post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art. 
                                Enamel pin vaporware wayfarers, organic succulents hella sustainable cardigan.
                            </p>
                            <p>
                                Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday
                                carry +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly 
                                single-origin coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral 
                                intelligentsia leggings raw denim kombucha tote bag messenger bag chambray vape coloring 
                                book scenester. Activated charcoal wayfarers church-key tote bag synth brunch. 
                                Retro cornhole
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="about__popup">
                        <React.Fragment>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="zPX50wz42ig" onClose={() => setOpen(false)} />

                            <button className="about__btn-primary" onClick={()=> setOpen(true)}>
                                <img className='about__popup-imgbtn' src={playBtn} alt="play button" />
                            </button>
                        </React.Fragment>
                    </div>
                </div>
        </section>
        <section className='inspiration'>
                <div className="inspiration__inner">
                    <img src={inspirationIMG} alt="chair" className="inspiration__images"/>
                    <div className="inspiration__content">
                        <h3 className="inspiration__title">
                            Our Inspiration in details
                        </h3>
                        <p className="inspiration__text">
                        Semiotics fixie four dollar toast, next level woke scenester direct trade photo
                         booth helvetica jean shorts. Fanny pack church-key cornhole, banh mi thundercats 
                         gochujang keytar.
                        </p>
                        <ul className="inspiration__list">
                        <li className="inspiration__item">
                                <div className="inspiration__item-content">
                                    <p className="inspiration__item-text">Design and technical drawings</p>
                                    <p className="inspiration__num">80%</p>
                                </div>
                                <div className="inspiration__line" style={{width: '80%'}}></div>
                            </li>
                            <li className="inspiration__item">
                                <div className="inspiration__item-content">
                                    <p className="inspiration__item-text">Measurments</p>
                                    <p className="inspiration__num">70%</p>
                                </div>
                                <div className="inspiration__line" style={{width: '70%'}}></div>
                            </li>
                            <li className="inspiration__item">
                                <div className="inspiration__item-content">
                                    <p className="inspiration__item-text">Furniture functionality analysis</p>
                                    <p className="inspiration__num">75%</p>
                                </div>
                                <div className="inspiration__line" style={{width: '75%'}}></div>
                            </li>
                            <li className="inspiration__item">
                                <div className="inspiration__item-content">
                                    <p className="inspiration__item-text">Interior visualization</p>
                                    <p className="inspiration__num">40%</p>
                                </div>
                                <div className="inspiration__line" style={{width: '40%'}}></div>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
        <div className="partners">
            <div className="container-fluid">
                <div className="partners__items">
                    <img src={part1} alt="" className="partners__item" />
                    <img src={part2} alt="" className="partners__item" />
                    <img src={part1} alt="" className="partners__item" />
                    <img src={part2} alt="" className="partners__item" />
                    <img src={part1} alt="" className="partners__item" />
                </div>
            </div>
        </div>
        <NewColection image1={collection1} image2={collection2} image3={collection3} image4={collection4} image5={collection5}/>
        <Footer/>
    </div>
}