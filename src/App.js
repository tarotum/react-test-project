import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";
import List from "./components/List";

const GET_DATA = gql`
  query getData {
    continents {
      name
      children: countries {
        name
        children: languages {
          name
        }
      }
    }
  }
`;

function App({ data: { loading, error, continents } }) {
  return (
    <div className="App">
      {loading && <div>loading</div>}
      {error && global.console.log(error)}
      {continents && <List list={continents} level={0} />}
    </div>
  );
}

export default graphql(GET_DATA)(App);
