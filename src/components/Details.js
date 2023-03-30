import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setMeals(res.data.meals));
  }, []);

  return (
    <div>
      <Navigation />
      <Link to={"/"}>Retour</Link>
      {meals.map((meal) => (
        <div className="meal" key={meal.idMeal}>
          <img
            src={meal.strMealThumb}
            alt="image de repas"
            style={{ width: 400 }}
          />
          <h2 className="title">{meal.strArea}</h2>
          <h3>{meal.countrie}</h3>
          <p>{meal.strInstructions}</p>
          <a target="blank" href={meal.strYoutube}>
            sur youtube
          </a>
        </div>
      ))}
    </div>
  );
};

export default Details;
