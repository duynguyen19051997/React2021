import { Section, Card, Ul } from "../UI/UI";
import { MealItem } from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const AvailableMeals = (props) => {
  return (
    <Section className={classes.meals}>
      <Card>
        <Ul>
          {DUMMY_MEALS != null && DUMMY_MEALS.length > 0
            ? DUMMY_MEALS.map((x) => <MealItem meal={x} />)
            : null}
        </Ul>
      </Card>
    </Section>
  );
};
