import logo from '../img/kilkennys-logo-white.png';
import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <footer className="container-fluid">
            <div className="row bg-dark">
                <div className="col-sm-12 col-lg-3 d-flex justify-content-center align-items-center p-4">
                    <img src={logo} className="logo" alt="Kilkennys Restaurant" />
                </div>
                <div className="col-sm-12 col-lg-7 d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-center p-4">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-12 col-lg-2 px-4 py-2 d-flex justify-content-center align-items-center justify-content-lg-end align-items-lg-end text-white">
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col-sm-12 p-2 pb-3 d-flex justify-content-center align-items-center text-white">
                        &copy; 2021 All Right Reserved.
                    </div>
            </div>
        </footer>
    )
}
