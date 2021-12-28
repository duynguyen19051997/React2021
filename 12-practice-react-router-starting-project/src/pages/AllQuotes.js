import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Duy", text: "My Quote 1" },
  { id: "q2", author: "Duy", text: "My Quote 2" },
  { id: "q3", author: "Duy", text: "My Quote 3" },
  { id: "q4", author: "Duy", text: "My Quote 4" },
  { id: "q5", author: "Duy", text: "My Quote 5" },
];

export const AllQuotes = (props) => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};
