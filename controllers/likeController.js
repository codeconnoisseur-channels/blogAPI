const { likes } = require("../models");
exports.createLikes = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const dislike = await likes.findOne({ where: { email, postId: id } });
    if (dislike) {
      await dislike.destroy();
      return res.status(200).json({
        message: "You unliked this post",
      });
    }
    const liked = await likes.create({ postId: id, email });

    res.status(201).json({
      message: "Likes successfully created",
      data: liked,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};

exports.calculateLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const totalLikes = await likes.count({ where: { postId } });
    res.status(200).json({
      message: `${totalLikes} people liked this post`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};
