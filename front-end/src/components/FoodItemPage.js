import React, { useState } from "react";
import "./FoodItemPage.css";

function FoodItemPage({ id, description, title, image, restaurantChain }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    let likedItems = localStorage.getItem("likedItems")
      ? JSON.parse(localStorage.getItem("likedItems"))
      : [];

    if (!likedItems.some((item) => item.id === id)) {
      likedItems.push({ id, description, title, image, restaurantChain });
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }

    alert("Added to Likes");
    setIsLiked(true);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    let dislikedItems = localStorage.getItem("dislikedItems")
      ? JSON.parse(localStorage.getItem("dislikedItems"))
      : [];

    if (!dislikedItems.some((item) => item.id === id)) {
      dislikedItems.push({ id, description, title, image, restaurantChain });
      localStorage.setItem("dislikedItems", JSON.stringify(dislikedItems));
    }

    alert("Added to Dislikes");
    setIsLiked(false);
    setIsDisliked(true);
  };

  return (
    <div className={"FoodItemPage"}>
      <h1 className="FoodItemPageTitle">{title}</h1>
      <img className="FoodItemPageImage" src={image} alt="" />
      <p className="FoodItemPageDescription">{description}</p>
      <p className="FoodItemPageAvailability">
        Available at{" "}
        <a
          target="_blank"
          href={"https://google.com/search?q=" + restaurantChain}
        >
          {restaurantChain}
        </a>
      </p>
      <div className="RatingSection">
        <p className={"RatingPrompt"}>Did you enjoy this meal?</p>
        <button
          className={`RatingButton LikedButton ${isLiked && "ActiveButton"}`}
          onClick={handleLike}
        >
          Yes
        </button>
        <button
          className={`RatingButton DislikedButton ${
            isDisliked && "ActiveButton"
          }`}
          onClick={handleDislike}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default FoodItemPage;
