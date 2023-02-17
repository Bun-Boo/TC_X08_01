import User from "../models/User.js";
import asyncHandler from "express-async-handler";

 const userController = {
  getAllUsers: asyncHandler(async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }),

  getUserById: asyncHandler(async (req, res ,id) => {
    id = req.params.id;
    try {
      const user = await User.findOne({ _id : id });
      const { password, ...newUser} = user._doc;
      return res.status(200).json(newUser);
    } catch (error) {
      // res.status(500).json(error);
      let errorMessage = 'User not found!';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      throw new Error(errorMessage);
    }
  }),
  updateUserInformation: asyncHandler(async (req, res) => {
    const user = {
      email: req.body.email,
      name: req.body.userName,
      phone: req.body.phone,
    };

    try {
      let result = await User.findOne({
        email: user.email,
      });
      if (result === null) {
        res.status(404).json('Email not exist!');
      }
      await User.updateOne(
        { email: user.email },
        {
          $set: {
            userName: user.name,
            phone: user.phone,
          },
        }
      );
      res.json({
        message: 'User updated!',
      });
    } catch (error) {
      console.log(error);
    }
  }),
  deleteUser: asyncHandler(async (req, res) => {
    try {
      let result = await User.findOne({
        email: req.body.email,
      });
      if (result === null) {
        res.status(404).json('Email not exist!');
      } else {
        await User.remove({ email: result.email });
        res.status(200).json({
          message: 'deleted!',
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  })
}

export default userController;