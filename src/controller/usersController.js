const getAllUsers = (req, res) => {
  res.json({
    messages: "Get Users Success",
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    messages: "Create New User Success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  res.json({
    messages: "Update User Success",
  });
};

const deleteUser = (req, res) => {
  res.json({
    messages: "Delete User Success",
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
