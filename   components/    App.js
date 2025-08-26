const { useEffect, useState } = require('react');

function App() {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
  });

  useEffect(() => {
    return () => {
      // Cleanup function to prevent memory leaks
      setFormData({
        prompt: "",
        answer1: "",
        answer2: "",
      });
    };
  }, []);

  return (
    // Your component JSX here
  );
}

export default App;