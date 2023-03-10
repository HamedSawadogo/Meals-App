import React from 'react';
import '../styles/meal.css';

const Meal = ({ title, url, countrie, comment }) => {
  return (
    // titre , image pays, commentaires
    <div className='meal'>
      <img src={url} alt="" />
      <h2 className='title'>{title}</h2>
      <h5>origin: {countrie}</h5>
      <p>{comment}</p>
    </div>
  );
};

export default Meal;