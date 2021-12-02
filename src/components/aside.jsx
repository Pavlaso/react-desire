import magnifier from './../images/magnifier.svg'

import facebook from './../images/facebook.svg'
import instagram from './../images/instagram.svg'
import pinterest from './../images/Pinterest.svg'
import whatsapp from './../images/whatsapp.svg'
import youtube from './../images/youtube.svg'

export const Aside = () => {
    return <aside className="aside">
        <form className='aside__search'>
            <input className='aside__search-input' placeholder='Serth' type="text" />
            <button className='aside__search-btn' type='submit'>
                <img className='aside__search-image' src={magnifier} alt="magnifier" />
            </button>
        </form>
            <div className="aside__category">
                <h6 className="aside__category-title"> Categories </h6>
                <ul className="aside__category-list">
                    <li className="aside__category-item">
                        <a className="aside__category-link" href="#">
                            Dining room (1)
                        </a>
                    </li>
                    <li className="aside__category-item">
                        <a className="aside__category-link" href="#">
                            Office furniture (12)
                        </a>
                    </li>
                    <li className="aside__category-item">
                        <a className="aside__category-link" href="#">
                            Simple interiror design (2)
                        </a>
                    </li>
                    <li className="aside__category-item">
                        <a className="aside__category-link" href="#">
                            Design (4)
                        </a>
                    </li>
                    <li className="aside__category-item">
                        <a className="aside__category-link" href="#">
                            Bedroom Furniture (1)
                        </a>
                    </li>
                </ul>
            </div>
            <div className="resent-posts">
                <h6 className="resent-posts__title"> Recent Posts </h6>
                    <ul className="resent-posts__list">
                        <li className="resent-posts__item">
                            <a className="resent-posts__item-title" href="#">
                                Cred selfies edison bulb four dollar toast humblebrag
                            </a>
                                <div className="resent-posts__information">
                                    <span className="resent-posts__date">August 10, 2020  </span> |
                                    <a className="resent-posts__author" href='#'>by Ann Summers</a>
                                </div>
                        </li>
                        <li className="resent-posts__item">
                            <a className="resent-posts__item-title" href="#">
                                Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
                            </a>
                            <div className="resent-posts__information">
                                <span className="resent-posts__date">September 30 ,2020 </span> |
                                <a className="resent-posts__author" href='#'>by Ann Summers</a>
                            </div>
                        </li>
                        <li className="resent-posts__item">
                            <a className="resent-posts__item-title" href="#">
                                Cred selfies edison bulb four dollar toast humblebrag
                            </a>
                        <div className="resent-posts__information">
                            <span className="resent-posts__date">May 2, 2020 </span> |
                            <a className="resent-posts__author" href='#'>by Ann Summers</a>
                        </div>
                        </li>
                </ul>
            </div>
            <div className="blog__tags">
                <h6 className="blog__tags-title">
                    Tags
                </h6>
                <div className="blog__tags-links">
                    <a className="blog__tags-link" href="#">Dining room futniture</a>
                    <a className="blog__tags-link" href="#">Chair</a>
                    <a className="blog__tags-link" href="#">Table</a>
                    <a className="blog__tags-link" href="#">Bedroom</a>
                    <a className="blog__tags-link" href="#">Office Furniture</a>
                </div>
            </div>
            <ul className="blog__social-networks">
                        <li className="blog__social-item">
                            <a className="blog__social-link" href="#" >
                                <img src={facebook} alt="social network" className="blog__network" />
                            </a>
                        </li>
                        <li className="blog__social-item">
                            <a className="blog__social-link" href="#" >
                                <img src={instagram} alt="social network" className="blog__network" />
                            </a>
                        </li>
                        <li className="blog__social-item">
                            <a className="blog__social-link" href="#" >
                                <img src={pinterest} alt="social network" className="blog__network" />
                            </a>
                        </li>
                        <li className="blog__social-item">
                            <a className="blog__social-link" href="#" >
                                <img src={whatsapp} alt="social network" className="blog__network" />
                            </a>
                        </li>
                        <li className="blog__social-item">
                            <a className="blog__social-link" href="#" >
                                <img src={youtube} alt="social network" className="blog__network" />
                            </a>
                        </li>
                    </ul>
</aside>
}