import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../mongodb/models/user.js";

const userSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        msg: "User Already Exists",
      });
    }

    //Creating new user
    user = new User({ firstName, lastName, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "randomString", { expiresIn: 10000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User Not Exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect Password !",
      });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "randomString", { expiresIn: 10000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        accessToken: token,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        },
      });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export { userSignup, userLogin };
