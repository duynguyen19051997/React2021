import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";
import { AuthContext } from "./components/context/auth-context";

const App = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <React.Fragment>
      {!authContext.isAuth && <Auth />}
      {authContext.isAuth && <Ingredients />}
    </React.Fragment>
  );
};

export default App;
