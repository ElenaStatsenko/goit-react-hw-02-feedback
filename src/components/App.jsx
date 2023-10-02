import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistic } from "./Statsistic/Statsitic";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    render() {
      return (
        <div>
           <Feedback/>
          <Statistic/>
        </div>
      );
    }
  }