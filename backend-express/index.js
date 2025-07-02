// import express
import express from "express";

// import cors
import cors from "cors";

// import body-parser
import bodyParser from "body-parser";

// init app
const app = express();

// use cors
app.use(cors());

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/toJSON();
app.use(bodyParser.json());

// define port
const port = 3000;

// route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
