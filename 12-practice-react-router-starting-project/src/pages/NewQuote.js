import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

export const NewQuote = (props) => {
  const history = useHistory();

  const addQuoteHandler = (quote) => {
    console.log(quote);

    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
