import React from "react";

function QuestionItem({ question, deleteQuestion, updateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleChange = (event) => {
    updateQuestion(id, parseInt(event.target.value));
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          value={correctIndex.toString()}
          onChange={handleChange}
          aria-label="Correct Answer"
        >
          {answers.map((ans, idx) => (
            <option key={idx} value={idx.toString()}>
              {ans}
            </option>
          ))}
        </select>
      </label>
      <button onClick={() => deleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;