import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import Meal from './Meal';

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52959
const Favorites = () => {

  const [meals, setMeals] = useState([]);
  const dataMeals = [];
  useEffect(() => {
    let stored = window.localStorage.meals ?
      window.localStorage.meals.split(',')
      : [];
    for (let i = 0; i < stored.length; i++) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${stored[i]}`)
        .then((res) => dataMeals.push(res.data.meals)).then(() => setMeals(...dataMeals));
    }

  }, []);
  return (
    <div>
      <Navigation />
      <Logo />
      {meals.length > 0 ?
        meals.map((meal, key) => (
          <Meal
            key={key}
            title={meal.strMeal}
            url={meal.strMealThumb}
            comment={meal.strInstructions}
            countrie={meal.strArea}
            id={meal.idMeal}
          />
        )) : (
          <h2>La liste est vide</h2>
        )}
    </div>
  );
};

export default Favorites;