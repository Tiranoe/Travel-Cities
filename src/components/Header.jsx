import { Link } from 'react-router-dom';

const Nav = ({img, title, alt}) => {
    return (
        <nav className = "nav">
            <Link to="/">
                <img src={img} alt={alt} role="presentation"></img>
            </Link>
                <div>{title}</div>
        </nav>
    )
}

const Header = (props) => {

    const content = {
        navLogo: "https://i.imgur.com/lKcLv6B.jpeg",
        backgroundPic: "https://i.pinimg.com/564x/28/94/99/289499baec8d9b8842b19fdbaa2ac0c9.jpg",
        altBackground: "Crumpled Paper Background"
    }

    const {navLogo: logo, backgroundPic: background, altBackground} = content;

    return (
        <header style={{height: "50px", overflow: "hidden" }}>
        <Nav title = "Travelizer" alt="logo" img={logo}></Nav>
        <img
        style={{width: "100%"}}
        alt = {altBackground}
        src = {background}
        />
        </header>
    )
}

export default Header;
export {Nav};