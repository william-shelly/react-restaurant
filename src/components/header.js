import logo from '../img/kilkennys-logo-white.png';
import MainNav from "./mainnav.js"

export default function Header() {
    return (
        <header className="container-fluid">
            <div className="row bg-dark">
                    <div className="col-sm-12 col-lg-3 d-flex justify-content-center align-items-center p-4">
                        <img src={logo} className="logo" alt="Kilkennys Restaurant" />
                    </div>
                    <div className="col-sm-12 col-lg-5 offset-lg-4 px-4 py-2 d-flex justify-content-center align-items-center">
                        <MainNav></MainNav>
                    </div>
                </div>
        </header>
    )
}
