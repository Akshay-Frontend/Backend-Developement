import express from "express";
import 'dotenv/config';

const app = express();

app.get("/", (req, resp) => {
  resp.send("server start..");
  console.log("working...");
});

app.get("/products", (req, resp) => {
  resp.json({
    name: "Apple",
    price: 10000,
    version: "Pro 18+",
  });
  console.log("done products listing..")
});

app.listen(process.env.PORT);
