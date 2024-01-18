const express = require('express');
const router = express.Router();
const User = require('./users');
const CORS = require('cors');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(CORS());

router.post('/sign', async (req, res) => {
    const { naam, email, pass, num } = req.body;

    try {
        await User.create({
            name: naam,
            email: email,
            pass: pass,
            num: num
        });

        console.log(naam);
        res.send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, pass } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (user) {
            if (pass === user.pass) {
                res.send(console.log('Login Success'));
            } else {
                res.send(console.log('Wrong credentials'));
            }
        } else {
            res.send("User not registered");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

module.exports = router;
