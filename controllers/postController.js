const { postTable } = require("../models");
//create Table
exports.createPost = async (req, res) => {
  try {
    const { email, title, description, author } = req.body;
    const data = {
      email,
      title,
      description,
      author,
    };
    const createInfo = await postTable.create(data);
    res.status(201).json({
      message: "New post created successfully",
      data: createInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const findPost = await postTable.findByPk(req.params.postId);
    if (!findPost) {
      return res.status(404).json({
        message: "Post with the above id does not exist",
      });
    }
    const { email, title, description, author } = req.body;
    const updateInfo = await findPost.update({
      email,
      title,
      description,
      author,
    });
    res.status(200).json({
      message: "Post updated successfully",
      data: updateInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const findPostId = await postTable.findByPk(req.params.postId);
    if (!findPostId) {
      return res.status(404).json({
        message: "Post with the above id does not exist",
      });
    }
    const deleted = await findPostId.destroy();
    return res.status(200).json({
      message: "Post deleted successfully",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: error.message,
    });
  }
};
