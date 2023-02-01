import "./navbar.css";

    // import Logo from "../../assets/images/logo2.jpg";
 import Logo from "../../assets/images/logo.png";

export default function Navbar() {


    return (
        
        <>
            <header>
                <a href="#">
                  <img src={Logo} className="logo" alt="..."/>
                </a>
                <ul className="navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Cardápio</a></li>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                
                {/* <div id="menu-btn" className="fas fa-bars"></div> */}
                
                
                
            </header>
        </>
    )
}