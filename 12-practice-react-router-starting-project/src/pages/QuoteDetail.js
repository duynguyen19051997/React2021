import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Duy", text: "My Quote 1" },
  { id: "q2", author: "Duy", text: "My Quote 2" },
  { id: "q3", author: "Duy", text: "My Quote 3" },
  { id: "q4", author: "Duy", text: "My Quote 4" },
  { id: "q5", author: "Duy", text: "My Quote 5" },
];

export const QuoteDetail = (props) => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
