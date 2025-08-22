const express = require("express");
const router = require("./routes/postroutes");
const likeRouter = require("./routes/likeroutes");
const app = express();
app.use(express.json());
app.use(router);
app.use(likeRouter);
const PORT = 7788;
app.listen(PORT, () => {
  console.log(`Server is listening at http:localhost:${PORT}`);
});
