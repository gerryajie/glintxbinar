const express = require("express");
const app = express();
const stores = require("./routes/stores");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/gerry", stores);

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
