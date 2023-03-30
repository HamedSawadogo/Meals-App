import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Meal from "./Meal";
import "../styles/meals.css";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";

const Loader = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const FormWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [value, setValue] = useState("tomato");
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
        setLoading(false);
      });
  }, [value]);
  return (
    <div className="container">
      <Navigation />
      <Logo />
      <FormWrap>
        <form action="">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="rechercher une recette"
          />
        </form>
      </FormWrap>
      <div className="meals">
        {!loading ? (
          meals?.map((meal) => (
            <Meal
              key={meal.idMeal}
              title={meal.strMeal}
              url={meal.strMealThumb}
              comment={meal.strInstructions}
              countrie={meal.strArea}
              id={meal.idMeal}
            />
          ))
        ) : (
          <Loader>
            <CircularProgress />
          </Loader>
        )}
      </div>
    </div>
  );
};
export default Meals;
