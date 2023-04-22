import React from "react";
import Header from "./Header";
import Option from "./Option";
import { Link } from "react-router-dom";

function LikedItems() {
  const [likedItems, setLikedItems] = React.useState([]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("likedItems")) || [];
    setLikedItems(items);
  }, []);

  const style = {
    backgroundSize: "cover",
    height: "150px",
    width: "150px",
  };
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
      <h1 style={{ textAlign: "center" }}>Liked Items</h1>
      <div>
        {likedItems.map((item) => (
          <div className={"FoodItem"}>
            <img
              src={item.image}
              alt=""
              style={style}
              className={"FoodImage"}
            />
            <div className={"FoodName"}>
              <h3>{item.title}</h3>
              <i>
                <h5>From: {item.restaurantChain}</h5>
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedItems;
