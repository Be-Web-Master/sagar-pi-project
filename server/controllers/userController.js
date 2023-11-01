const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Model/userModal");
const FormData = require("../Model/fromDataModal");
const createUser = async (req, res) => {
  try {
    const { username, email, role, password } = req.body;
    console.log({ username, email, role, password });
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      role,
      password: encryptedPassword,
    });

    console.log(user);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ err });
  }
};
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log({ username, password });
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log(isPasswordCorrect);
      if (isPasswordCorrect) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET);
        res
          .status(200)
          .cookie(process.env.JWT_SECRET_KEY, token, {
            httpOnly: true,
          })
          .json({ msg: "User Successfully Signed In" });
      } else {
        res.status(401).json({ msg: "incorrect password" });
      }
    } else {
      res.status(401).json({ msg: "incorrect username and password" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
};
const createCard = async (req, res) => {
  try {
    const { name, email, phone, profilePicture } = req.body;
    console.log({ name, email, phone, profilePicture });
    const formData = await FormData.create({
      name,
      email,
      phone,
      profilePicture,
    });
    console.log(formData);
    res.status(200).json({ formData });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const getAllUser = async () => {
  try {
    const getAllData = await User.find();
    console.log({getAllData:getAllData});
     res.status(200).json(getAllData)
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createUser,
  loginUser,
  createCard,
  getAllUser,
};
