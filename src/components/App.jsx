import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statsistic/Statsitic';
import { SectionTitle } from './Title/SectionTitle';
export class App extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  countTotalFeedback = (a, b, c) => {
    const totalFeedback = a + b + c;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = (a, b, c) => {
    const totalPercentage = (a + b + c) / 100;
    const positivePercentage = Math.round(a / totalPercentage);
    return positivePercentage;
  };

  render() {
    return (
      <div>
        <SectionTitle title={'Please leave feedback'}/>
        <FeedbackOptions quantity={this.state} />
        <SectionTitle title ={'Statistics'}/>
        <Statistic
          countTotal={this.countTotalFeedback}
          quantity={this.state}
          countPositive={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
