const getAllUsers = (req, res) => {
  const data = {
    id: 1,
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
  const { id } = req.params;
  console.log("Id User : ", id);
  res.json({
    messages: "Update User Success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log("Id User : ", id);

  res.json({
    messages: "Delete User Success",
    data: {
      id: id,
      name: "Joko",
      email: "joko@gmail.com",
      address: "Solo",
    },
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
