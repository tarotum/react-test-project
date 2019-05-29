import React from "react";
import "./App.css";
import List from "./components/List";

import genData from "./utils/genData";
import sliceData from "./utils/sliceData";

const response = genData(5, 3);
// Slice array of response data if contains more then 100 items
const data = sliceData(response.data, 100);

function App() {
  return (
    <div className="App">
      <List list={data} level={0} />
    </div>
  );
}

export default App;
