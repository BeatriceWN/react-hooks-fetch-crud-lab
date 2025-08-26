const { useEffect } = require('react');

function QuestionForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    setFormData({
      prompt: "",
      answer1: "",
      answer2: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form elements */}
    </form>
  );
}

export default QuestionForm;