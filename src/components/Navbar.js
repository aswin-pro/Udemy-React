
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>

            <div className="navbar__s2">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#02060d' }} />
                <input type="text" id="search" placeholder="Search for anything here. Tech, Business, Art..." />
            </div>

            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: '#0a0202' }} />
                <FontAwesomeIcon icon={faBell} style={{ color: '#010204' }} />
                <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />
            </div>
            <div className="navbar__s4">
                <FontAwesomeIcon icon={faBars} style={{ color: '#000000' }} />
            </div>
        </div>
    );
}

export default Navbar;
