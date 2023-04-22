import React, { useState, useEffect } from "react";
import Header from "./Header";
import FoodItem from "./FoodItem";
import Option from "./Option";
import { Link } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/foodItems")
      .then((res) => {
        console.log(res.data);
        setItems(res.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <div className={"Options"}>
        <Link to="/">
          <Option optionName={"Recommendations"}></Option>
        </Link>
        <Link to="/LikedItems">
          <Option optionName={"Likes"}></Option>
        </Link>
        <Link to="/DislikedItems">
          <Option optionName={"Dislikes"}></Option>
        </Link>
      </div>
      <h1 style={{ textAlign: "center" }}>Recommendations</h1>
      {console.log("items", items)}
      {items.menuItems &&
        items.menuItems.length > 0 &&
        items.menuItems.map((item) => (
          <FoodItem
            id={item.id}
            title={item.title}
            image={item.image}
            restaurantChain={item.restaurantChain}
          />
        ))}
    </div>
  );
}

export default MainPage;
