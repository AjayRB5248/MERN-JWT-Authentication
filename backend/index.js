const dotenv = require('dotenv')
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose= require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server Running on Port: http://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
