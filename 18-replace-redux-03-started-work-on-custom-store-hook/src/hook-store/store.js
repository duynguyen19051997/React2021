import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, [setState]);
};

export default useStore;
