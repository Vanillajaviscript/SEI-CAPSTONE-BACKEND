
// require('dotenv').config();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const UserModel = require("../models/user.js");
// const googleSignin = require('./userGoogle.js');

// ////////////////////////////
// // Secret
// ////////////////////////////
// const secret = process.env.SECRET;

// ////////////////////////////
// // Signup
// ////////////////////////////
// const signup = async (req, res) => {
//   const {email, password, firstName, lastName} = req.body;
//   try {
//     const oldUser = await UserModel.findOne({email});
//     if(oldUser) {
//       return res.status(400).json({message: "User already exists"})
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await UserModel.create({
//       email,
//       password: hashedPassword,
//       name: `${firstName} ${lastName}`,
//     });

//     const token = jwt.sign({email: result.email, id: result._id}, secret, {
//       expiresIn: "24h",
//     });

//     res.status(201).json({result, token});

//   } catch(error) {
//     res.status(500).json({message: "Error"});
//     console.log(error)
//   }
// };


// module.exports = {
//   signup,
//   signin,
//   googleSign
// }
