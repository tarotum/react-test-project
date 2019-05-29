import React from "react";
import ReactDOM from "react-dom";
import ApolloCliet from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./index.css";

import App from "./App";

const client = new ApolloCliet({
  uri: "http://countries.trevorblades.com/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
