import React, { Fragment } from "react";
import "./serviceList.css";
const MealList = (props) => {

  return (
    <Fragment>
      <div className="mealList">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <p>${props.price}</p>
      </div>
    </Fragment>
  );
};
export default MealList;
