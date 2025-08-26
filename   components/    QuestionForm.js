const { useEffect, useState } = require('react');

const QuestionForm = ({ addQuestion }) => {
    const [formData, setFormData] = useState({
        prompt: "",
        answer1: "",
        answer2: "",
    });

    useEffect(() => {
        return () => {
            // Cleanup function to cancel subscriptions or async tasks
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/questions', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((createdQuestion) => {
            addQuestion(createdQuestion);
            setFormData({
                prompt: "",
                answer1: "",
                answer2: "",
            });
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={formData.prompt}
                onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                placeholder="Question Prompt"
            />
            <input
                type="text"
                value={formData.answer1}
                onChange={(e) => setFormData({ ...formData, answer1: e.target.value })}
                placeholder="Answer 1"
            />
            <input
                type="text"
                value={formData.answer2}
                onChange={(e) => setFormData({ ...formData, answer2: e.target.value })}
                placeholder="Answer 2"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionForm;