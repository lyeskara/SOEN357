import React from 'react';
import './FoodItem.css'
// Component found on the main page
// Represents a food item
// Food items are JSON objects within the food_dataset.txt
// To populate a FoodItem component, we want to pass it a JSON object
// representing a food item

function FoodItem({title, image}) {
    return(
      <div className={"FoodItem"} onClick={goToFood}>
          <img src={image} alt="" className={"FoodImage"}/>
          <p className={"FoodName"}>{title}</p>
      </div>
    );
}

function goToFood() {
    alert("GO TO FOOD");
}

export default FoodItem;