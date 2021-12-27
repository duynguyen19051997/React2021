import { Route } from "react-router-dom";

export const Welcome = (props) => {
  return (
    <section>
      <h2>Welcome</h2>
      <Route path="/welcome/admin">
        <p>Welcome, admin</p>
      </Route>
    </section>
  );
};
