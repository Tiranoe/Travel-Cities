import { Link } from 'react-router-dom';

const Nav = ({img, title, alt}) => {
    return (
        <nav className = "nav">
            <Link to="/">
                <img src={img} alt={alt} role="presentation" width = "50px"></img>
            </Link>
                <div>{title}</div>
        </nav>
    )
}

const Header = (props) => {

    const content = {
        navLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Noun_15537_ccElliotVerhaeren_travel.svg/512px-Noun_15537_ccElliotVerhaeren_travel.svg.png",
        backgroundPic: "https://i.pinimg.com/564x/28/94/99/289499baec8d9b8842b19fdbaa2ac0c9.jpg",
        altBackground: "Crumpled Paper Background"
    }

    const {navLogo: logo, backgroundPic: background, altBackground} = content;

    return (
        <header style={{height: "100px"}}>
        <Nav title = "Travelizer" alt="logo" img={logo}></Nav>
        <img class = "background_theme"
            style={{width: "100%"}}
            alt = {altBackground}
            src = {background}
          />
        </header>
    );
};

export default Header;
export {Nav};