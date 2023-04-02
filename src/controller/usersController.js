const getAllUsers = (req, res) => {
  res.json({
    messages: "Get Users Success",
  });
};

const createUser = (req, res) => {
    res.json({
        messages: "Create New User Success",
    });
}


module.exports = {
    getAllUsers,
    createUser,
}