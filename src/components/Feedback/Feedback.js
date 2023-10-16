export const FeedbackOptions = ({good, neutral, bad,}) => {
    return (
      <div>
        <button>{good}</button>
        <button>{neutral}</button>
        <button>{bad}</button>
        </div>
    
    );
  };
  
//   function FeedbackOptions({ options, onLeaveFeedback }) {
//   return (
//     <div>
//       {options.map((option) => (
//         <button key={option} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// }