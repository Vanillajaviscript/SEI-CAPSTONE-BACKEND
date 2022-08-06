// const UserModel = require("../models/user.js");


// const googleSignin = async (req, res) => {
//   const {email, name, token, googleId} = req.body;
//   try {
//     const oldUser = await UserModel.findOne({email});
//     if(oldUser) {
//       const result = {_id: oldUser._id.toString(), email, name};
//       return res.status(200).json({result, token})
//     }
//     const result = await UserModel.create({
//       email,
//       name,
//       googleId,
//     });
//     res.status(200).json({result, token})
//   } catch(error) {
//     res.status(500).json({message: "Google sign in unsuccessful"})
//     console.log(error)
//   }
// }

// module.exports = googleSignin;