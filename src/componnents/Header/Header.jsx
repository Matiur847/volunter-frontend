import { Link, NavLink } from "react-router-dom";
import "../../style/Header.css";
import volunterLogo from "../../media/logos/Group-1329.png";

const Header = ({ currentUser }) => {
  const navMenu = [
    { display: "Home", path: "/" },
    { display: "Donation",  },
    { display: "Event", path: "/event" },
    { display: "Blog",  },
  ];

  return (
    <div className="headerNav">
      <div className="volunterHeader d-flex align-items-center justify-content-between">
        <div className="volunterLogo">
          <img src={volunterLogo} alt="" />
        </div>
        <div className="volunterMenu d-flex align-items-center justify-content-center">
          <div className="headerNav">
            {navMenu.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {item.display}
              </NavLink>
            ))}
          </div>
          {currentUser ? (
            <span className="currentUserName">{currentUser?.displayName}</span>
          ) : (
            <div>
              <Link to="/login">
                <button className="headerBtn">Register</button>
              </Link>
              <Link to="/admin">
                <button className="headerBtn headerBtn2">Admin</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
