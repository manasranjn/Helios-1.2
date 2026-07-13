const Student = require("../models/student.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

exports.register = async (req, res) => {
    const student = await Student.create(req.body);

    res.json({ token: generateToken(student._id), message: "Student created" });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email }).select("+password");

    if (!student || !(await bcrypt.compare(password, student.password)))
        return res.status(401).json({ message: "Invalid credentials" });

    res.json({ token: generateToken(student._id), message: "Student Found" });
};