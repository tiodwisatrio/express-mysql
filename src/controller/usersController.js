const getAllUsers = (req, res) => {
  res.json({
    messages: "Get Users Success",
  });
};

const createUser = (req, res) => {
  res.json({
    messages: "Create New User Success",
  });
};

const updateUser = (req, res) => {
  res.json({
    messages: "Update User Success",
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
