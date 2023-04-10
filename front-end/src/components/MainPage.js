import React from 'react'
import Header from './Header'
import FoodItem from './FoodItem'
import Option from './Option'
import FoodItemPage from "./FoodItemPage";

function MainPage() {
    return (
        <div>
            <Header></Header>
            <div className={"Options"}>
                <Option optionName={"Recommendations"} link={"https://facebook.com"}></Option>
                <Option optionName={"Likes"}></Option>
                <Option optionName={"Dislikes"}></Option>
            </div>
            <FoodItem
                id={353305}
                title={"Seafood Pasta Bake"}
                image={"https://images.spoonacular.com/file/wximages/353305-312x231.jpg"}>

            </FoodItem>
            <FoodItem
                id={424853}
                title={"Chopped Kale Superfood Side Salad"}
                image={"https://images.spoonacular.com/file/wximages/424852-312x231.jpg"}>
            </FoodItem>
            <FoodItem
                id={295257}
                title={"Seafood Chimi in Chimichangas"}
                image={"https://images.spoonacular.com/file/wximages/295257-312x231.jpg"}>
            </FoodItem>
            <FoodItemPage title={"Seafood Pasta Bake"}
                          description={"A pasta bake made with delicious seafood"}
                          image={"https://images.spoonacular.com/file/wximages/353305-312x231.jpg"}
                          restaurantChain={"Eat n Park"}></FoodItemPage>
        </div>
    )
}

export default MainPage
