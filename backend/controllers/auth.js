import User from "../models/user";

export const showMessage = (req, res) => {
  res.status(200).send(req.params.message);
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body; // destructuring req.body
  // validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters long");

  // check if user with email already exists
  let userExist = await User.findOne({ email }).exec();
  if (userExist)
    return res.status(400).send("User with the email already exists");

  // if user does not exist, create new user
  const newUser = new User({
    // create new user object
    name,
    email,
    password,
  });

  try {
    await newUser.save(); // save user to database
    console.log("New user created: ", newUser);
    return res.json({ ok: true }); // send response
  } catch (error) {
    console.log("Create user error: ", error);
    return res.status(400).send("Error creating user, please try again");
  }
};
