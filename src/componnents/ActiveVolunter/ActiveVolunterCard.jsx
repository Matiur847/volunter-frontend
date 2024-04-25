import React from "react";
import "../../style/ActiveVolunterCard.css";
import axios from "axios";

const ActiveVolunterCard = ({ item }) => {
  const deleteVolunter = async (id) => {
    try {
      await axios
        .delete(`http://localhost:4242/api/v1/deleteActiveVolunter/${id}`)
        .then((res) => {
          if (res.data.success === true) {
            alert("Volunter register Cancel, reload page");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="activeVCard mt-5">
      <div className="cardDesign">
        <div className="img">
          <img src={item.img} alt="" className="w-100" />
        </div>
        <div className="title">
          <h4>{item.organize}</h4>
          <span>{item.date}</span>
          <div className="cancelBtn">
            <button onClick={() => deleteVolunter(item._id)}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveVolunterCard;
