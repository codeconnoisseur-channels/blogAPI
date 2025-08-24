const router = require("express").Router();
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.post("/comment/:postId", createComment);
router.put("/comment/:postId", updateComment);
router.delete("/comment/:postId", deleteComment);
module.exports = router;
