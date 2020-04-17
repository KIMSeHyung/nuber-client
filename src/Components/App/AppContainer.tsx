import React from "react";
import AppPresnter from "./AppPresenter";
import theme from "../../theme";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import { ThemeProvider } from "../../typed-components";

const AppContainer = ({ data }: any) => (
  <ThemeProvider theme={theme}>
    <AppPresnter isLoggedIn={data.auth.isLoggedIn} />
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
