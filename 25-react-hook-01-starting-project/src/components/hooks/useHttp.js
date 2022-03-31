import { useReducer, useCallback } from "react";

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        isLoading: true,
        isError: false,
        message: "",
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        isLoading: false,
        isError: false,
        message: "",
        data: action.data,
        extra: action.extra,
      };
    case "ERROR":
      return {
        isLoading: false,
        isError: true,
        message: action.message,
      };
    case "CLEAR":
      return {
        isLoading: false,
        isError: false,
        message: "",
      };
    default:
      throw new Error("Should not get there");
  }
};

export const useHttp = () => {
  const [http, dispatchHttp] = useReducer(httpReducer, {
    isLoading: false,
    isError: false,
    message: "",
    data: null,
    extra: null,
    identifier: null,
  });

  const sendRequest = useCallback(
    (url, method, body, regExtra, regIdentifier) => {
      dispatchHttp({ type: "SEND", identifier: regIdentifier });
      fetch(url, {
        method: method,
        body: body,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatchHttp({
            type: "RESPONSE",
            data: responseData,
            extra: regExtra,
          });
        })
        .catch((err) => {
          dispatchHttp({
            type: "ERROR",
            message: "Deleting wrong",
          });
        });
    },
    []
  );
  return {
    isLoading: http.isLoading,
    isError: http.isError,
    message: http.message,
    extra: http.extra,
    data: http.data,
    identifier: http.identifier,
    sendRequest: sendRequest,
  };
};
