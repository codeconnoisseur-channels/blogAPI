const router = require("express").Router();
const { createPost, getPost } = require("../controllers/postController");
router.post("/post", createPost);
router.get("/post", getPost);
module.exports = router;
