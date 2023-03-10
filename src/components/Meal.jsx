import React from 'react';
import '../styles/meal.css';

const Meal = ({ title, url, countrie, comment }) => {
  return (
    // titre , image pays, commentaires
    <div className='meal'>
      <img src={url} alt="image de repas" />
      <h2 className='title'>{title}</h2>
      <h3>origin: {countrie}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default Meal;