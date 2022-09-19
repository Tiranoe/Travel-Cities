import { Link } from 'react-router-dom';

const Nav = ({title}) => {
    return (
        <nav className = "nav">
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Home;
export {Nav};