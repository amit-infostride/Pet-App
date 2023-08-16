import mealImage from '../../src/assets/pet.jpg'
import classes from './header.module.css';
import React, { Fragment } from "react";
import ContactButton from './contact/contactButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.BrandName}>Pet Veterinary</h1>
        <ContactButton
          logOutHandler={props.logOutHandler}
          authenticted={props.authenticted}
          onShow={props.onShow}
          showForm={props.onShowForm}
        />
      </header>
      <div className={classes.mainimage}>
        <img src={mealImage} alt="A Meal pic." />
      </div>
    </Fragment>
  );
};
export default Header;
