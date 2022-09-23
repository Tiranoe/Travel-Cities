import { Link } from 'react-router-dom';

const Nav = ({img, title, alt}) => {
    return (
        <nav className = "nav">
            <Link to="/">
                <img src={img} alt={alt} role="presentation"></img>
            </Link>
                <div>  {  title}</div>
        </nav>
    )
}

const Header = (props) => {

    const content = {
        navLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Noun_15537_ccElliotVerhaeren_travel.svg/512px-Noun_15537_ccElliotVerhaeren_travel.svg.png",
        backgroundPic: "https://www.depadresahijos.org/blog-mt1/mt-static/themes/theme-travel/banner-bg-1.gif",
        altBackground: "sky to ground"
    }

    const {navLogo: logo, backgroundPic: background, altBackground} = content;

    return (
        <header style={{height: "240px"}}>
        <Nav title = " Travelizer" alt="logo" img={logo}></Nav>
        <img class = "background-theme"
            style={{width: "100%"}}
            alt = {altBackground}
            src = {background}
          />
        </header>
    );
};

export default Header;
export {Nav};