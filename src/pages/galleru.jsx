import { BreadCrumbs } from "../components/breadcrumbs"
import { Buttons } from "../components/Buttons";
import { Footer } from "../components/footer"
import { Header } from "../components/header"

import galleryFurniture1 from "./../images/gallery1.jpg";
import galleryFurniture2 from "./../images/gallery2.jpg";
import galleryFurniture3 from "./../images/gallery3.jpg";
import galleryFurniture4 from "./../images/gallery4.jpg";
import galleryFurniture5 from "./../images/gallery5.jpg";
import galleryFurniture6 from "./../images/gallery6.jpg";
import galleryFurniture7 from "./../images/gallery7.jpg";
import galleryFurniture8 from "./../images/gallery8.jpg";
import galleryFurniture9 from "./../images/gallery9.jpg";
import galleryFurniture10 from "./../images/gallery10.jpg";


export const Gallery = () => {
    return <div className="main">
        <Header/>
        <BreadCrumbs />
        <div className="gallery gallery-page">
            <div className="container-fluid">
                <Buttons/>
                    <div className="gallery__items">
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture1} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture2} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture3} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture4} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture5} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture6} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture7} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture8} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture9} alt="furniture" /> 
                            </a>
                            <a className="gallery__item" href='#'>
                               <img className="gallery__furniture" src={galleryFurniture10} alt="furniture" /> 
                            </a>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
}