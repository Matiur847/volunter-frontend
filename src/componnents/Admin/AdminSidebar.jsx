import React from "react";
import "../../style/AdminSidebar.css";
import volunterLogo from "../../media/logos/Group-1329.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const AdminSidebar = () => {
  return (
    <div className="sidebarSection">
      <Container>
        <div className="volunterHeader">
          <div className="volunterLogo">
            <img src={volunterLogo} alt="" />
          </div>
          <div className="sidebarLink mt-5">
            <Link to={"/volunter-register-list"}>
              {" "}
              <i class="ri-group-line"></i> Voluneer register list
            </Link>{" "}
            <br />
            <Link to={"/add-event"}>
              {" "}
              <i class="ri-add-line"></i> Add Event
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminSidebar;
