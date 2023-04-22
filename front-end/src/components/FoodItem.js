import React, { useState } from "react";
import "./FoodItem.css";
import FoodItemPage from "./FoodItemPage";

function FoodItem({ id, title, image, restaurantChain }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    console.log("Opend");
  };

  const closePopup = (event) => {
    event.stopPropagation();
    setIsPopupOpen(false);
    console.log("Closed");
  };

  const popupStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const popupInnerStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  const style = {
    backgroundSize: "cover",
    height: "150px",
    width: "150px",
  };

  return (
    <div className={"FoodItem"} onClick={() => openPopup()}>
      <img src={image} alt="" style={style} className={"FoodImage"} />
      <div className={"FoodName"}>
        <h3>{title}</h3>
        <i>
          <h5>From: {restaurantChain}</h5>
        </i>
      </div>
      {isPopupOpen && (
        <div className={"FoodItemPopup"} style={popupStyle}>
          <div className={"FoodItemPopupInner"} style={popupInnerStyle}>
            <button
              className={"FoodItemPopupCloseButton"}
              onClick={(event) => closePopup(event)}
            >
              X
            </button>
            <FoodItemPage
              id={id}
              title={title}
              image={image}
              restaurantChain={restaurantChain}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodItem;
