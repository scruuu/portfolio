import React from 'react';

const issues = [
  {
    id: 1,
    title: "[Bug]: Sidebar not collapsing correctly on mobile",
    status: "Open",
    author: "johndoe",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "[Feature]: Add dark mode toggle",
    status: "Closed",
    author: "janedoe",
    time: "1 day ago",
  },
  {
    id: 3,
    title: "[Docs]: Update README with setup instructions",
    status: "Open",
    author: "peterjones",
    time: "3 days ago",
  },
];

const Issues: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Issues</h1>
      <div className="border border-gray-700 rounded-lg">
        <ul className="divide-y divide-gray-700">
          {issues.map((issue) => (
            <li key={issue.id} className="p-4 flex items-center justify-between">
              <div>
                <h2 className="font-bold">{issue.title}</h2>
                <p className="text-sm text-gray-400">
                  #{issue.id} opened {issue.time} by {issue.author}
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  issue.status === "Open" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}>
                {issue.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Issues;
