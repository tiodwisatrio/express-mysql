const getAllUsers = (req, res) => {
  const data = {
    name: "Joko",
    email: "joko@gmail.com",
    address: "Solo",
  };

  res.json({
    messages: "Get All Users Success",
    data: data,
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
