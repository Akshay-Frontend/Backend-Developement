import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");

  const getJokes = async () => {
    try {
      const getJokesURL = await axios.get("/api/jokes");
      const response = await getJokesURL.data;
      console.log(response);
      setJokes(response);
    } catch (err) {
      console.log(err);
      setError("Backend server is not running");
    }
  };

  useEffect(() => {
    getJokes();
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Ram Ji.... </h1>

          <h2 className="text-2xl font-semibold text-blue-600 mt-2">
            Backend API Jokes
          </h2>

          <p className="mt-4 inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            Total Jokes: {jokes.length}
          </p>
        </div>
        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center">
            <p className="font-semibold text-red-600">⚠️ {error}</p>
            <p className="mt-1 text-sm text-red-500">
              Please start your backend server and try again.
            </p>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          {jokes.map((joke) => (
            <div
              key={joke.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                  {joke.id}
                </span>

                <h2 className="text-xl font-bold text-gray-800">
                  {joke.title}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed">{joke.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
