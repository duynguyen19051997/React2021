import { H2, Section, P } from "../UI/UI";

import classes from "./MealsSummary.module.css";

export const MealsSummary = (props) => {
  return (
    <Section className={classes.summary}>
      <H2>Delicious Food, Delivered To You</H2>
      <P>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </P>
      <P>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </P>
    </Section>
  );
};
