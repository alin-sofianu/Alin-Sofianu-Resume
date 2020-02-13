import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const logProfiler = ({
  ProfilerId,
  Phase,
  ActualTime,
  Basetime,
  StartTime,
  CommitTime,
  Interactions
}) => {
  console.log({
    ProfilerId,
    Phase,
    ActualTime,
    Basetime, //time taken by react
    StartTime, //time at which render starts
    CommitTime,
    Interactions // this is gotten from the rapping API
  });
};

ReactDOM.render(
  <Profiler id="myApp" onRender={logProfiler}>
    <App />
  </Profiler>,
  document.getElementById("root")
);
registerServiceWorker();
