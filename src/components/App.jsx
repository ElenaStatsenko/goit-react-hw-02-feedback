import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statsistic/Statsitic';
import { SectionTitle } from './Title/SectionTitle';
import { Notification } from './Notification';

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

  handleLeaveFeedback = (options) => {

    this.setStatse((prevState) => ({
      [options]: prevState[options]+ 1
    }));
  }

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };


  render() {

    const optionsKey = Object.keys(this.state)
  
   
  return (
      <div>

        <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions quantity={this.state} options={optionsKey} onLeaveFeedback={this.handleLeaveFeedback}/>
       </SectionTitle >
        <SectionTitle title={'Statistics'} quantity={this.state}>
         {this.optionsKey > 0 ?( <Statistic
          countTotal={this.countTotalFeedback}
          quantity={this.state}
          countPositive={this.countPositiveFeedbackPercentage}/>) 
          : <Notification message={'There is no feedback'}/>}
        </SectionTitle>

       

      </div>
    );
  }
}
