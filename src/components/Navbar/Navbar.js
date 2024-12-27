import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar jacques-francois-shadow-regular">
            <div className="left">
                <Link to={`/home`}>
                    <img src="/cute-cat.png" alt="text" />
                </Link>
                <div className="fontsize"> jelena.wiki</div>
            </div>
            <div className="right" >
            <Link to={`/home`} className="navbar-link">home</Link>
            <Link to={`/experience`} className="navbar-link">experience</Link>
            <Link to={`/interests`} className="navbar-link">interests</Link>
            <Link to={`/which-cat-are-you`} className="navbar-link">which cat are you?</Link>
            </div>
        </div>
    );
}