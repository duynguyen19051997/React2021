import { Fragment } from "react";
import { HelloWorld } from "../HelloWorld/HelloWorld";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <HelloWorld />
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
