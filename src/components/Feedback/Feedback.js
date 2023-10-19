import { nanoid } from 'nanoid';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);
  console.log(optionsKeys);
  return (
    <ul>
      {optionsKeys.map(optionsKey => (
        <button key={nanoid()} onClick={() => onLeaveFeedback(optionsKey)}>
          {optionsKey}
        </button>
      ))}
    </ul>
  );
};
