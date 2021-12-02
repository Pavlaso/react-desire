import close from './../images/Path.svg'
import rectangle from './../images/Rectangle.jpg'
import bigLogo from './../images/logo-big.png'

export const RightSideMenu = ({closeMenu}) => {
  return (
    <div className="wrapper">
        <div className="rightside-menu">
          <button className="rightside-menu__close" onClick={closeMenu}>
            <img src={close} alt="logo" />
          </button>
          <div className="rightside-menu__content">
            <a className="rightside-menu__logo" href="#">
              <img src={bigLogo} alt="logo" />
            </a>
            <h4 className="rightside-menu__title">
               Furniture for life
            </h4>
            <p className="rightside-menu__text">
              Sustainable hot chicken skateboard, dreamcatcher meggings
              actually squid. Slow-carb everyday carry +1 art party 
               microdosing, put a bird on it brooklyn
            </p>
           <img className="rightside-menu__images" src={rectangle} alt="" />
          </div>
        </div>
    </div>
  );
}
