import logo from '../img/kilkennys-logo-white.png';
import MainNav from "./mainnav.js"

export default function Header() {
    return (
        <header className="container-fluid position-absolute bg-gray-gradient-70-to-0">
            <div className="row ml-4 mr-4">
                    <div className="col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start align-items-center p-4">
                        <img src={logo} className="logo" alt="Kilkennys Restaurant" />
                    </div>
                    <div className="col-sm-12 col-lg-6 offset-lg-2 px-4 py-2 d-flex justify-content-center justify-content-lg-end align-items-center">
                        <MainNav></MainNav>
                    </div>
                </div>
        </header>
    )
}
