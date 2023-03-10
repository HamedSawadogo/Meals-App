import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from './Meal';
import "../styles/meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [value, setValue] = useState('tomato');

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
      .then((res) => setMeals(res.data.meals));
  }, [value]);
  return (
    <div className="container">
      <form action="">
        <input type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='rechercher une recette' />
      </form>
      <div className='meals'>
        {meals && meals?.map((meal) => (
          <Meal
            key={meal.idMeal}
            title={meal.strMeal}
            url={meal.strMealThumb}
            comment={meal.strInstructions}
            countrie={meal.strArea}
          />
        ))}
      </div>
    </div>
  );
};
export default Meals;