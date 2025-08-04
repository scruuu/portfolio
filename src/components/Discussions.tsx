import React from 'react';

const Discussions: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me through any of the following channels:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: ujjawalvatsa@gmail.com</li>
        <li>LinkedIn: https://www.linkedin.com/in/ujjawalvatsa/</li>
        <li>GitHub: https://github.com/ujjawalvatsa</li>
      </ul>
      <p>
        I look forward to hearing from you!
      </p>
    </div>
  );
};

export default Discussions;
