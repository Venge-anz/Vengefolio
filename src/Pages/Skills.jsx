export const Skills = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 mr-30 ml-30">
      {/* Hard Skills */}
      <div className="bg-gray-200 p-6 sm:p-10 rounded-xl border border-gray-300 flex-1">
        <h2 className="text-center text-xl sm:text-2xl font-bold border-b-2 border-purple-400 pb-2 mb-4">
          HARD SKILLS
        </h2>
        <ul className="text-md sm:text-lg font-light list-disc list-inside space-y-2">
          <li>React.js (Hooks)</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>REST API consumption</li>
          <li>Basic Firebase</li>
          <li>Git/GitHub</li>
          <li>Deployment in Netlify</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="bg-gray-200 p-6 sm:p-10 rounded-xl border border-gray-300 flex-1">
        <h2 className="text-center text-xl sm:text-2xl font-bold border-b-2 border-purple-400 pb-2 mb-4">
          SOFT SKILLS
        </h2>
        <ul className="list-disc list-inside space-y-2 text-md sm:text-lg font-light">
          <li>
            Self-taught and constant learner –{" "}
            <p className="italic inline">
              Passionate about learning on my own and exploring new
              technologies.
            </p>
          </li>
          <li>
            Adaptability –{" "}
            <p className="italic inline">
              I adjust quickly to changes and new challenges.
            </p>
          </li>
          <li>
            Effective communication –{" "}
            <p className="italic inline">
              I express ideas and questions clearly and collaboratively.
            </p>
          </li>
          <li>
            Creativity –{" "}
            <p className="italic inline">
              I find original solutions to problems and challenges.
            </p>
          </li>
          <li>
            Perseverance –{" "}
            <p className="italic inline">
              I don’t give up when facing obstacles and keep improving every
              day.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
