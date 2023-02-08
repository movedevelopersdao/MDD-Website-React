const express = require("express");
const router = express.Router();
const User = require("../models/User");
const FoodCategory = require("../models/FoodCategory");
const Food_items = require("../models/Fooditem");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//creatuser
router.post(
  "/creatuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const salt = await bcrypt.genSalt(10)
      let securePass = await bcrypt.hash(req.body.password, salt);

      await User.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
// login wrong
// router.post(
//   "/loginuser",
//   [
//     body('email', "Enter a Valid Email").isEmail(),
// //     body('password', "Password cannot be blank").exists(),
//   ],
//   async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     let email = req.body.email;
//     try {
//       let userdata = await User.findOne({email});
//       if (!userdata) {
//         return res
//           .status(400)
//           .json({ errors: "Try  logging with correct credentials" });
//       }
//       const pwdCompare = await bcrypt.compare(req.body.password,userdata.password);
//       if (!pwdCompare) {
//         return res
//           .status(400)
//           .json({ errors: "Try  logging with correct credentials" });
//       }

//       const data = {
//         user:{
//             id:userdata.id
//         }
//       }
//       const authToken = jwt.sign(data, jwtSecret);

//       return res.json({ success, authToken });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

//right login
router.post('/loginuser', [
    body('email', "Enter a Valid Email").isEmail(),
    body('password', "Password cannot be blank").exists(),
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  //{email:email} === {email}
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success, authToken })


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})

router.post(
  "/food_items",
  async (req, res) => {
    try {
      await Food_items.create({
        CategoryName: req.body.CategoryName,
        name: req.body.name,
        img: req.body.img,
        options: req.body.options,
        description: req.body.description,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
router.post(
  "/foodCategory",
  async (req, res) => {
    try {
      await FoodCategory.create({
        CategoryName: req.body.CategoryName
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
