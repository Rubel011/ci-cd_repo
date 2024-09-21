const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors());
// Home route
app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message:
        "Server is running perfectly fine ---set up using the following buildx in ci/cd",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error at home route" });
  }
});
app.use("/health-check", (req, res) => {
  res
    .status(200)
    .send({ success: true, message: "Checking health completed with 200" });
});

// Start the server
app.listen(PORT, async () => {
  try {
    // Server listening message
    console.log({ message: `Server is listening on port ${PORT}` });
  } catch (error) {
    console.log(error.message);
  }
});
