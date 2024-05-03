import React, { useState } from "react";
import "../../style/AddEvent.css";

const AddEvent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [organize, setOrganize] = useState("");
  const [image, setImage] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
  };

  const eventDataOnChange = (e) => {
    // console.log("e", e);
    try {
      if (e.target.name === "img") {
        console.log("Hello");
      } else {
        // setEvent({ ...event, [e.target.name]: e.target.value });
        // setEvent({ ...event, [e.target.name]: e.target.value });
      }
    } catch (error) {}
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
              onChange={eventDataOnChange}
            />
          </div>
          <div className="inputField">
            <span>Event Date</span> <br />
            <input type="date" required onChange={eventDataOnChange} />
          </div>
          <div className="inputField">
            <span>Description</span> <br />
            <input
              type="title"
              required
              placeholder="Enter Title"
              onChange={eventDataOnChange}
            />
          </div>
          <div className="inputField">
            <span>Banner</span> <br />
            <input
              type="file"
              name="img"
              accept="image/*"
              required
              onChange={eventDataOnChange}
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
