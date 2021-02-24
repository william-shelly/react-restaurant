import logo from '../img/kilkennys-logo-white.png';
import MainNav from "./mainnav.js"

export default function Header() {
    return (
        <header className="container">
            <div className="row">
                    <div className="col">
                        <img src={logo} className="logo" alt="Kilkennys Restaurant" />
                    </div>
                    <div className="col">
                        <MainNav></MainNav>
                    </div>
                </div>
        </header>
    )
}
