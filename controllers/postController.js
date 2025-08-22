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

exports.getPost = async (req, res) => {
  try {
    const newPost = await postTable.findAll();
    res.status(200).json({
      message: "Post retrieved successfully",
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
