const router = require("express").Router();
const {
  createPost,
  getAllAndLikes,
  updatePost,
  deletePost,
} = require("../controllers/postController");
router.post("/post", createPost);
router.get("/allpost", getAllAndLikes);
router.put("/post/:postId", updatePost);
router.delete("/post/:postId", deletePost);
module.exports = router;
