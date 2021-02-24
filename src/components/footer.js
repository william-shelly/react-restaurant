import MainNav from "./mainnav.js"

export default function Footer() {
    return (
        <footer className="container">
            <div className="row">
                <div className="col">
                    [logo]
                </div>
                <div className="col">
                    <MainNav></MainNav>
                </div>
                <div className="col">
                    &copy; 2021 All Right Reserved.
                </div>
                <div className="col">
                    [social icons]
                </div>
            </div>
        </footer>
    )
}
