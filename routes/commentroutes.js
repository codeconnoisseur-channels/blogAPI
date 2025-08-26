const router = require("express").Router();
const {
  createComment,
  getAllComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.post("/comment/:postId", createComment);
router.get("/comment", getAllComment);
router.put("/comment/:postId", updateComment);
router.delete("/comment/:postId", deleteComment);
module.exports = router;
