import React, { useEffect, useState } from "react";
import "../styles/meal.css";
import { Link } from "react-router-dom";

const Meal = ({ title, url, countrie, comment, id }) => {
  const [meal, setMeal] = useState([]);
  const storageArticle = (id) => {
    let stored = window.localStorage.meals
      ? window.localStorage.meals.split(",")
      : [];
    if (!stored.includes(id.toString())) {
      stored.push(id);
    }
    window.localStorage.meals = stored;
  };
  const handleStorage = (id) => {
    storageArticle(id);
  };
  return (
    // titre , image pays, commentaires
    <div className="meal">
      <img src={url} alt="image de repas" />
      <h2 className="title">{title}</h2>
      <h3>origin: {countrie}</h3>
      <p>{comment}</p>
      <button onClick={() => handleStorage(id)}>ajouter aux favoris</button>
      <Link className="link" to={`/${id}`}>
        en savoir plus
      </Link>
    </div>
  );
};

export default Meal;
