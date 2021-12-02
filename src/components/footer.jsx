import email from './../images/envelope.svg'
import facebook from './../images/facebook.svg'
import instagram from './../images/instagram.svg'
import pinterest from './../images/Pinterest.svg'
import whatsapp from './../images/whatsapp.svg'
import youtube from './../images/youtube.svg'


export const Footer = () => {
    return (
            <footer className="footer">
                <div className="wrapper">
                <div className="footer__content">
                    <div className="container">
                        <div className="footer__inner">
                            <div className="footer__info">
                                <h6 className="footer__info-title">Contact Us</h6>
                                <p className="footer__info-text">
                                    Keffiyeh poutine etsy, paleo cray put a bird on it microdosing 
                                    schlitz you probably occupy
                                </p>
                                <a className="info-email" href="mailto:ouremailaddress@email.com">
                                     <img className="" src={email} /> ouremailaddress@email.com
                                </a>
                                <form className="footer__form">
                                    <input className="footer__form-input" placeholder="Subscribe by email" type="email"/>
                                    <button className="footer__form-button"> Send </button>
                                </form>
                            </div>
                            <ul className="footer__social">
                                <li className="footer__social-item">
                                    <a className="footer__social-link" href="#">
                                    <img src={facebook} />Facebook</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link" href="#">
                                    <img src={instagram} />Instagram</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link" href="#">
                                    <img src={pinterest} />Pinterest</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link" href="#">
                                    <img src={whatsapp} />Whatsapp</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link" href="#">
                                    <img src={youtube} />Youtube</a>
                                </li>
                            </ul>
                            <nav className="footer__menu">
                                <ul className="footer__menu-list">
                                    <li className="footer__menu-item"><a className="footer__menu-link" href="#">Delivery</a></li>
                                    <li className="footer__menu-item"><a className="footer__menu-link" href="#">FAQ</a></li>
                                    <li className="footer__menu-item"><a className="footer__menu-link" href="#">Help</a></li>
                                    <li className="footer__menu-item"><a className="footer__menu-link" href="#">More About Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <p>
                            674 Gonzales Drive. Washington, PA 15301
                        </p>
                    </div>
                </div>
                </div>
            </footer>
    );
  }
  