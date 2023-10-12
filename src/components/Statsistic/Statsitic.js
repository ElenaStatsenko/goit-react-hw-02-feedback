export const Statistic = ({ countTotal, quantity, countPositive }) => {
  const { good, neutral, bad } = quantity;
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {countTotal(good, neutral, bad)}</p>
      <p>Positivefeedback: {countPositive(good, neutral, bad)}%</p>
    </div>
  );
};
