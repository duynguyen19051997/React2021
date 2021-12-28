import QuoteForm from "../components/quotes/QuoteForm";

export const NewQuote = (props) => {
  const addQuoteHandler = (quote) => {
    console.log(quote);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
