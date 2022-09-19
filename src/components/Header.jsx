import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className = "nav">
            <Link to="/">Home</Link>
            <div>Test Navigation Bar</div>
        </nav>
    )
}

export default Header;
export {Nav};