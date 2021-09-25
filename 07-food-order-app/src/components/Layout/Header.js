import { Fragment } from "react";

import { HeaderCartButton } from "./HeaderCartButton";
import { HeaderUI, H1, CardNoStyle, Image } from "../UI/UI";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

export const Header = (props) => {
  return (
    <Fragment>
      <HeaderUI className={classes.header}>
        <H1>Meals</H1>
        <HeaderCartButton onClick={props.onShowCart} />
      </HeaderUI>
      <CardNoStyle className={classes["main-image"]}>
        <Image src={mealsImage} alt="Meals" />
      </CardNoStyle>
    </Fragment>
  );
};
