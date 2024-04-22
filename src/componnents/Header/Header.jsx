import { NavLink } from "react-router-dom";
import "../../style/Header.css";
import volunterLogo from "../../media/logos/Group-1329.png";

const Header = () => {
  const navMenu = [
    { display: "Home" },
    { display: "Donation", path: "/donation" },
    { display: "Event", path: "/event" },
    { display: "Blog", path: "/blog" },
  ];

  return (
    <div className="volunterHomePage">
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
          <button className="headerBtn">Register</button>
          <button className="headerBtn headerBtn2">Admin</button>
        </div>
      </div>

      <div className="homePageTitle text-center mt-5">
        <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
        <div className="searchField mt-3">
          <input type="search" placeholder="search..." />
          <button className="inputSearchBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
