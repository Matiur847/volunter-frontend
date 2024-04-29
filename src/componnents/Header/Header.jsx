import { Link, NavLink, useLocation } from "react-router-dom";
import "../../style/Header.css";
import volunterLogo from "../../media/logos/Group-1329.png";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import AddVolunter from "../AddVolunter/AddVolunter";

const Header = ({ currentUser }) => {
  const [lgShow, setLgShow] = useState(false);

  const navMenu = [
    { display: "Home", path: "/" },
    { display: "Donation" },
    { display: "Event", path: "/event" },
    { display: "Blog" },
  ];

  let adminPage = useLocation();

  return (
    <div className="headerNav">
      <div className="volunterHeader d-flex align-items-center justify-content-between">
        <div className="volunterLogo">
          <img src={volunterLogo} alt="" />
        </div>
        {adminPage.pathname === "/admin" ? (
          <div className="volunterMenu">
            <div className="headerNav">
              <Link onClick={() => setLgShow(true)}>
                {" "}
                <i className="ri-group-line"></i> All Volunteer
              </Link>
              <>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Body>{lgShow && <AddVolunter />}</Modal.Body>
                </Modal>
              </>
              <Link>
                {" "}
                <i className="ri-add-line"></i> Add Event
              </Link>
            </div>
          </div>
        ) : (
          <div className="volunterMenu d-flex align-items-center justify-content-center">
            <div className="headerNav">
              {navMenu.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.display}
                </NavLink>
              ))}
            </div>
            {currentUser ? (
              <span className="currentUserName">
                {currentUser?.displayName}
              </span>
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
        )}
      </div>
    </div>
  );
};

export default Header;
