import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from './Meal';
import "../styles/meals.css";
import Navigation from './Navigation';
import Logo from './Logo';
import styled from 'styled-components';


const FormWrap = styled.div`
 margin:0 auto;
 display:flex;
 justify-content:center;
`;

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [value, setValue] = useState('tomato');
  const [checked, setChecked] = useState(true);


  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + value)
      .then((res) => setMeals(res.data.meals));
  }, [value]);
  return (
    <div className="container">
      <Navigation />
      <Logo />
      <FormWrap>
        <form action="">
          <input type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='rechercher une recette' />
        </form>
      </FormWrap>
      <div className='meals'>
        {meals && meals.length > 0 ?
          meals?.map((meal) => (
            <Meal
              key={meal.idMeal}
              title={meal.strMeal}
              url={meal.strMealThumb}
              comment={meal.strInstructions}
              countrie={meal.strArea}
              id={meal.idMeal}
            />
          )) : (
            <h2 style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center"
            }}>
              Aucun repas trouvé 😞
            </h2>
          )
        }
      </div>
    </div>
  );
};
export default Meals;