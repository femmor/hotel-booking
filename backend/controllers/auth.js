export const showMessage = (req, res) => {
  res.status(200).send(req.params.message);
};

export const registerUser = (req, res) => {
  console.log(req.body);
};
