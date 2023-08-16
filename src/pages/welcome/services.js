import "./services.css";
import React from "react";
import ServiceList from "./serviceList";
const services = [
  {
    id: "m1",
    name: "Nail cutting",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Hair",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Treatment",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Cleaning",
    description: "Healthy...and green...",
    price: 18.99,
  },
]
;
const AvailableServices = (props) => {
  const allSevices = services.map((meal) => {
    return (
      <ServiceList
        key={meal.id}
        id={meal.id}
        description={meal.description}
        price={meal.price}
        name={meal.name}
      ></ServiceList>
    );
  });
  return (
    <div className="serviceDiv">
      <section className="meals">
        <ul>
          <li className="mealslist">{allSevices}</li>
        </ul>
      </section>
    </div>
  );
  };
  
export default AvailableServices;
