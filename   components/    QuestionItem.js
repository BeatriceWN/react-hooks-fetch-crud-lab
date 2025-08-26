const { render, screen, fireEvent } = require('@testing-library/react');
const QuestionForm = require('../components/QuestionForm');

test('hello world!', () => {
	render(<QuestionForm />);
	expect(screen.getByLabelText(/Correct Answer/)).toBeInTheDocument();
});