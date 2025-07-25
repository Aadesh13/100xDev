const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course, User} = require("../db");
const router = Router();
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })

    res.json({
        msg: "Admin created successfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({
        username,
        password
    })

    if(user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg : "incorrect email or pass"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.json({
        msg : "Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses : response
    })
});

module.exports = router;