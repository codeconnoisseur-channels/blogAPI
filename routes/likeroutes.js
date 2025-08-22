const {
  createLikes,
  calculateLikes,
} = require("../controllers/likeController");
const router = require("express").Router();
router.post("/like/:id", createLikes);
router.get("/like/:postId", calculateLikes);
module.exports = router;
