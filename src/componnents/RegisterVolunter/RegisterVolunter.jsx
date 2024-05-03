import React, { useEffect, useState } from "react";
import "../../style/RegisterVolunter.css";
import volunterLogo from "../../media/logos/Group-1329.png";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import allData from "../../allData";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const RegisterVolunter = () => {
  const navigate = useNavigate();
  const [regRes, setRegRes] = useState();
  const [currentVolunter, setCurrentVolunter] = useState([]);
  const { id } = useParams();

  // Get current user
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser.uid);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, [auth]);

  useEffect(() => {
    const filterVolunter = allData.filter((item) => item._id === id);
    setCurrentVolunter(filterVolunter);
  }, [id]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [organize, setOrganize] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setFullName(currentUser?.displayName);
    setEmail(currentUser?.email);
    // const name = currentVolunter.map((item) => item.title)
    // setOrganize(name);
    currentVolunter.map((item) => setOrganize(item.title));
    currentVolunter.map((item) => setImg(item.img));
  }, [currentUser?.displayName, currentUser?.email, currentVolunter]);

  const handleVolunterRegister = (e) => {
    e.preventDefault();

    if (currentUser?.email) {
      const config = {
        Headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post(
          "http://localhost:4242/api/v1/registerVolunter",
          {
            fullName: fullName,
            email: email,
            date: date,
            description: description,
            organize: organize,
            img: img,
          },
          config
        )
        .then((res) => {
          setRegRes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please Login!");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (regRes?.success === true) {
      navigate("/event");
      alert("Register Successfylly");
    }
  }, [regRes, navigate]);

  return (
    <div className="loginSection ">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md="12" className="text-center">
            <img
              src={volunterLogo}
              alt=""
              className="loginVolunterImg w-25 mt-5"
            />
          </Col>
          <Col
            md="6"
            className="d-flex align-items-center justify-content-center mt-5"
          >
            <div className="loginArea registerVolunter mb-5">
              <h3 className="flex-end">Register as a volunteer</h3>
              <form
                onSubmit={handleVolunterRegister}
                encType="multipart/form-data"
              >
                <div className="volunterInput">
                  <input type="name" placeholder="Full Name" value={fullName} />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Username or Email"
                    value={email}
                  />{" "}
                  <br />
                  <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />{" "}
                  <br />
                  <input
                    type="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />{" "}
                  <br />
                  <input
                    type="books"
                    placeholder="Organize books at the library."
                    value={organize}
                  />{" "}
                  <br />
                  <input
                    className="volunterSubmitBtn"
                    type="submit"
                    value="Registration"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterVolunter;
