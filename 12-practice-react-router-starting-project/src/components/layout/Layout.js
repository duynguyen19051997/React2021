import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { MainNavigation } from "./MainNavigation";

import { AllQuotes } from "../../pages/AllQuotes";
import { QuoteDetail } from "../../pages/QuoteDetail";
import { NewQuote } from "../../pages/NewQuote";

import classes from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};
