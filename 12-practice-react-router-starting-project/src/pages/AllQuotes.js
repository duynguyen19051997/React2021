import { Fragment, useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Duy", text: "Learn React is great" },
//   { id: "q2", author: "Duy", text: "Hello world" },
//   { id: "q3", author: "Duy", text: "Change to be stronger" },
//   { id: "q4", author: "Duy", text: "Nothing make you sad" },
//   { id: "q5", author: "Duy", text: "Believe in you" },
// ];

export const AllQuotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered focus">
        <p>{error}</p>
      </div>
    );
  }

  if (status === "completed" && (!loadedData || loadedData.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <QuoteList quotes={loadedData} />
    </Fragment>
  );
};
