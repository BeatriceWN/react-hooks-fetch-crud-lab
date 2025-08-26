const { render, screen, fireEvent } = require('@testing-library/react');
const QuestionForm = require('../components/QuestionForm');

test('hello world!', () => {
	render(<QuestionForm />);
	const dropdown = screen.getByLabelText(/Correct Answer/);
	fireEvent.change(dropdown, { target: { value: '3' } });
	expect(dropdown.value).toBe('3');
});