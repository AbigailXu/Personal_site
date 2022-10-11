import headerImg from "../images/AdobeStock_281653854.jpeg";
import "./Header.css";

function Header() {
    return ( 
        <div id="header">
            <div id="header-text-group">
                <h1 id="header-name">ABIGAIL XU</h1>
                <p id="header-intro">Software Engineer & Full-stack Developer <br/> 3+ years of experience</p>
                <div id="header-contact"></div>
            </div>
            <img id="header-img" src={headerImg} alt="headerImg" />
        </div>
     );
}

export default Header;