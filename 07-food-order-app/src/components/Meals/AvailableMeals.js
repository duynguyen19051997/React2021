import { Section, Card, Ul } from "../UI/UI";
import { MealItem } from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

export const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (meals) => {
      const mealsList = [];

      for (const i in meals) {
        mealsList.push({
          id: i,
          name: meals[i].name,
          description: meals[i].description,
          price: meals[i].price,
        });
      }

      setMeals(mealsList);
    };

    fetchMeals(
      {
        url: "https://react-http-66256-default-rtdb.firebaseio.com/meal.json",
      },
      transformMeals
    );
  }, [fetchMeals]);

  return (
    <Section className={classes.meals}>
      <Card>
        {isLoading && <h3 className={classes["error-text"]}>Loading...</h3>}
        {error !== "" && <h3 className={classes["error-text"]}>{error}</h3>}
        {meals != null && meals.length > 0 && (
          <Ul>
            {meals.map((x) => (
              <MealItem key={x.id} meal={x} />
            ))}
          </Ul>
        )}
      </Card>
    </Section>
  );
};
