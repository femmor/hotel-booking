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
    return res
      .status(400)
      .send(`User with the email "${email}" already exists`);

  // if user does not exist, create new user
  const newUser = new User({
    // create new user object
    name,
    email,
    password,
  });

  try {
    await newUser.save(); // save user to database
    return res.status(200).send("User registered successfully");
  } catch (error) {
    console.log("Create user error: ", error);
    return res.status(400).send("Error creating user, please try again");
  }
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user)
        return res.status(400).send("User with the email does not exist");
      // check if password is correct
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(400).send("Error logging in");
        if (!isMatch) return res.status(400).send("Incorrect password");

        // if user is found and password is correct
        // create a token with JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // return the token to the user
        return res.json({
          ok: true,
          token,
        });
      });
    })
    .catch(err => {
      console.log("Login user error: ", err);
      return res.status(400).send("Error logging in");
    });
};
