const { comment } = require("../models");

exports.createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment: commentText, email } = req.body;

    const data = {
      postId,
      comment: commentText,
      email,
    };
    const commentInfo = await comment.create(data);

    res.status(201).json({
      message: "Comment successfully created",
      data: commentInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const findComment = await comment.findByPk(req.params.postId);
    if (!findComment) {
      return res.status(404).json({
        message: "Comment with the above id does not exist",
      });
    }
    const { comment: commentText, email } = req.body;
    const updateInfo = await findComment.update({
      comment: commentText,
      email,
    });
    res.status(200).json({
      message: "Comment updated successfully",
      data: updateInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};

exports.deleteComment = async (req, res) => {
  const { postId } = req.params;
  try {
    const commentId = await comment.findByPk(req.params.postId);
    if (!commentId) {
      return res.status(404).json({
        message: "Comment with the above id does not exist",
      });
    }
    const deleted = await commentId.destroy();
    return res.status(200).json({
      message: "Comment deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};
