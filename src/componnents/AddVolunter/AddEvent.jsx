import React, { useState } from "react";
import "../../style/AddEvent.css";
import axios from "axios";
import { useNavigate } from "react-router";

const AddEvent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();

  const addEvent = (e) => {
    e.preventDefault();

    let myForm = new FormData();
    myForm.append("title", title);
    myForm.append("date", date);
    myForm.append("description", description);

    axios
      .post("http://localhost:4242/api/v1/addNewEvent", {
        title: title,
        date: date,
        description: description,
        img: img,
      })
      .then((data) => {
        if (data.data.success === true) {
          alert("Event Added successfully!");
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const dataOnChange = (e) => {
    try {
      if (e.target.name === "img") {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setImg(reader.result);
          }
        };

        reader.readAsDataURL(e.target.files[0]);
      } else {
      }
    } catch (error) {
      // handle your error here
    }
  };

  return (
    <div className="addEventSection mt-5">
      <h3 className="text-center">Add Event</h3>
      <div className="addEventForm">
        <form onSubmit={addEvent}>
          <div className="inputField">
            <span>Event Title</span> <br />
            <input
              type="title"
              placeholder="Enter Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inputField">
            <span>Event Date</span> <br />
            <input
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="inputField">
            <span>Description</span> <br />
            <input
              type="description"
              required
              placeholder="Enter Title"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="inputField">
            <span>Banner</span> <br />
            <input
              type="file"
              name="img"
              accept="image/*"
              required
              onChange={dataOnChange}
            />
          </div>
          <div className="inputField">
            <input className="addEventBtn" type="submit" value="Add Event" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
