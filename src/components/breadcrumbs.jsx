import { Link } from "react-router-dom"


export const BreadCrumbs = () => {
    return <div className='bread-crumbs'>
        <div className="container">
            <ul className="bread-crumbs__list">
                <li className="bread-crumbs__item">
                    <Link className="bread-crumbs__link" to="/">
                        Home
                    </Link>
                </li>
                <li className="bread-crumbs__item">
                    <Link className="bread-crumbs__link" to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    </div>
}