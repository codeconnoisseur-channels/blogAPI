const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
router.post("/post", createPost);
router.put("/post/:postId", updatePost);
router.delete("/post/:postId", deletePost);
module.exports = router;
