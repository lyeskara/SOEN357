import React from 'react'
import './FoodItemPage.css'

function FoodItemPage({id, description, title, image, restaurantChain}) {
    return (
        <div className={"FoodItemPage"}>
            <h1 className="FoodItemPageTitle">{title}</h1>
            <img className="FoodItemPageImage" src={image} alt=""/>
            <p className="FoodItemPageDescription">{description}</p>
            <p className="FoodItemPageAvailability">Available at <a target="_blank"
                               href={"https://google.com/search?q=" + restaurantChain}>{restaurantChain}</a></p>
            <div className="RatingSection">
                <p className={"RatingPrompt"}>Did you enjoy this meal?</p>
                <button className={"RatingButton LikedButton"}>Yes</button>
                <button className={"RatingButton DislikedButton"}>No</button>
            </div>
        </div>
    )
}

export default FoodItemPage
