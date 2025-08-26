const { useEffect, useState } = require('react');

const QuestionForm = () => {
    const [formData, setFormData] = useState({ prompt: "", answer1: "", answer2: "" });
    let isMounted = true;

    useEffect(() => {
        return () => {
            isMounted = false;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assume addQuestion is a function that adds a question
        addQuestion(formData).then((createdQuestion) => {
            if (isMounted) {
                setFormData({ prompt: "", answer1: "", answer2: "" });
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* form fields here */}
        </form>
    );
};

export default QuestionForm;