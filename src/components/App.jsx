import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistic } from './Statsistic/Statsitic';

export class App extends Component {
  state = {
    good: 1,
    neutral: 1,
    bad: 1,
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      countTotalFeedback: prevState + this.state,
    }));
  };

  render() {
    return (
      <div>
        <Feedback quantity={this.state} />
        <Statistic />
      </div>
    );
  }
}
