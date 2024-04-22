
import Logo from '../assets/images/logo-removebg-preview.png'
import MenuImg from '../assets/images/menu.png';
import CrossImg from '../assets/images/cross_canva.png';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <div id="header" className="pt-md-4 pt-3">
        <nav className="container navbar_section d-flex justify-content-between align-item-center">
            <div className="logo_section">
                <img src={Logo} alt="" />
            </div>
            <div className="navlinks_group d-md-flex d-none justify-content-center align-item-center">
                <ul className="ul_nav_links d-flex mb-0">
                    <li className="mx-lg-5 mx-md-3 mx-sm-2 align-self-center">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-lg-5 mx-md-3 mx-sm-2 align-self-center">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-lg-5 mx-md-3 mx-sm-2 align-self-center">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="mx-lg-5 mx-md-3 mx-sm-2 align-self-center">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="mx-lg-5 mx-md-3 mx-sm-2 align-self-center">
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="contact_box d-md-flex d-none">
                <Link to="/contact" className="px-3 py-2 align-self-center fw-bold rounded-1">Contact</Link>
            </div>
            <button className="btn d-md-none d-block pt-0" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <img src={MenuImg} className="mobile_menu" alt="" />
            </button>

            <div className="offcanvas offcanvas-start " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <img src={CrossImg} className="close_btn_offcanvas" data-bs-dismiss="offcanvas" aria-label="Close" alt="" />

                    <img src={Logo} className="ms-5 ps-4" alt="" />
                </div>
                <div className="offcanvas-body">
                    <ul className="">
                        <li className="ps-3  py-2"><Link className=" text-decoration-none fw-bold" to="/">Home</Link></li>
                        <li className="ps-3  py-2"><Link className=" text-decoration-none fw-bold" to="/about">About</Link></li>
                        <li className="ps-3  py-2"><Link className=" text-decoration-none fw-bold" to="/portfolio">Portfolio</Link></li>
                        <li className="ps-3  py-2"><Link className=" text-decoration-none fw-bold" to="/services">Services</Link></li>
                        <li className="ps-3  py-2"><Link className=" text-decoration-none fw-bold" to="/blog">Blog</Link></li>
                    </ul>
                    <div className="contact_box d-flex ps-5 pt-4">
                        <Link to="/contact" className="px-3 py-2 align-self-center fw-bold rounded-1">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}
