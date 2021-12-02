

export const NewColection = ({image1, image2, image3, image4, image5}) => {
    return <section className="new-collection">
    <div className="container-fluid">
        <div className="new-collection__container">
            <h3 className="new-collection__title">
                Furniture new collection
            </h3>
            <p className="new-collection__text">
            Deep v you probably haven't heard of them banh mi synth actually affogato. 
            Aesthetic lyft ethical drinking vinegar austint
            </p>
        </div>
        <div className="collection">
            <a className="collection__item" href='#'>
                <img className='collection__images' src={image1} alt="images" />
                <div className="collection__info">
                    <h6 className="collection__info-title">
                        Truffaut literally trust
                    </h6>
                    <p className="collection__info-text">
                        Living room furntiture | Chair
                    </p>
                </div>
            </a>
            <a className='collection__item' href='#'>
                <img className='collection__images' src={image2} alt="images" />
                <div className="collection__info">
                    <h6 className="collection__info-title">
                        Truffaut literally trust
                    </h6>
                    <p className="collection__info-text">
                        Living room furntiture | Chair
                    </p>
                </div>
            </a>
            <a className='collection__item' href='#'>
                <img className='collection__images' src={image3} alt="images" />
                <div className="collection__info">
                    <h6 className="collection__info-title">
                        Truffaut literally trust
                    </h6>
                    <p className="collection__info-text">
                        Living room furntiture | Chair
                    </p>
                </div>
            </a>
            <a className='collection__item' href='#'>
                <img className='collection__images' src={image4} alt="images" />
                <div className="collection__info">
                    <h6 className="collection__info-title">
                        Truffaut literally trust
                    </h6>
                    <p className="collection__info-text">
                        Living room furntiture | Chair
                    </p>
                </div>
            </a>
            <a className='collection__item' href='#'>
                <img className='collection__images' src={image5} alt="images" />
                <div className="collection__info">
                    <h6 className="collection__info-title">
                        Truffaut literally trust
                    </h6>
                    <p className="collection__info-text">
                        Living room furntiture | Chair
                    </p>
                </div>
            </a>
        </div>
    </div>
</section>
}