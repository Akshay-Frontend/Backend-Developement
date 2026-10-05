import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, resp) => {
  resp.send("This is running");
});

app.get("/api/jokes", (req, resp) => {
  const jokes = [
    {
      id: 1,
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime environment used to build backend applications.",
    },
    {
      id: 2,
      title: "What is Express.js?",
      content:
        "Express.js is a lightweight web framework for Node.js used to create APIs and web servers.",
    },
    {
      id: 3,
      title: "Understanding REST API",
      content:
        "REST API allows frontend and backend applications to communicate with each other.",
    },
    {
      id: 4,
      title: "Learning Git and GitHub",
      content:
        "Git is a version control system and GitHub is a platform for hosting Git repositories.",
    },
    {
      id: 5,
      title: "JavaScript Basics",
      content:
        "JavaScript is a programming language commonly used for frontend and backend development.",
    },
  ];

  resp.send(jokes);
});
app.listen(process.env.PORT);
