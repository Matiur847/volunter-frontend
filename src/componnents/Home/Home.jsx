import { Link, NavLink } from "react-router-dom";
import "../../style/Header.css";
import "../../style/Home.css";
import volunterLogo from "../../media/logos/Group-1329.png";
import { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Volunters from "../Volunters/Volunters";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";
import NewVolunter from "../Volunters/NewVolunter";

const Home = () => {
  const navMenu = [
    { display: "Home" },
    { display: "Donation", path: "/" },
    { display: "Event", path: "/event" },
    { display: "Blog", path: "/" },
  ];

  const [volunter, setVolunter] = useState([]);
  const [newEventVolunter, setNewVolunter] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchItem = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const currentSearchValue = data.filter((item) =>
          item.title.toLowerCase().includes(searchValue)
        );
        setVolunter(currentSearchValue);
      });
  }, [searchValue]);

  // Get current user
  const [currentUser, setCurrentUser] = useState([]);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert("Logout Successfully");
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4242/api/v1/getAllNewRegisterVolunter")
      .then((res) => {
        setNewVolunter(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  console.log(newEventVolunter);

  return (
    <div>
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
            {currentUser ? (
              <span className="currentUserName" onClick={handleSignOut}>
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
        </div>

        <div className="homePageTitle text-center mt-5">
          <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
          <div className="searchField mt-3">
            <input
              type="search"
              onChange={handleSearchItem}
              placeholder="search..."
            />
            <button className="inputSearchBtn">Search</button>
          </div>
        </div>
      </div>
      <div className="volunters mt-5">
        <Container>
          <Row>
            {volunter.map((item, index) => (
              <Col lg="3" md="6" sm="6" xs="6" key={index}>
                <Volunters volunter={item} />
              </Col>
            ))}
          </Row>
          <Row>
            {newEventVolunter?.allNewVolunter?.map((item, index) => (
              <Col lg="3" md="6" sm="6" xs="6" key={index}>
                <NewVolunter volunter={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
