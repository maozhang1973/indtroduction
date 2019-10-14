import React from "react";
import "./styles/styles.scss";
import CountdownWidget from "./widgets/countdown";

function App() {
  if (module.hot) {
    module.hot.accept();
  }
  return (
    <div className="row">
      <div className="column">
        <CountdownWidget></CountdownWidget>
      </div>
    </div>
  );
}
export default App;
