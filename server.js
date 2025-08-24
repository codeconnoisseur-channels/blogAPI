const express = require("express");
const postrouter = require("./routes/postroutes");
const likeRouter = require("./routes/likeroutes");
const commentRouter = require("./routes/commentroutes");
const app = express();
app.use(express.json());
app.use(postrouter);
app.use(likeRouter);
app.use(commentRouter);
const PORT = 7788;
app.listen(PORT, () => {
  console.log(`Server is listening at http:localhost:${PORT}`);
});
