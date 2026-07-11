const teacherModel = require('../models/teacher')

//! Create Teacher
exports.createTeacher = async (req, res) => {
    try {
        const { name, email, bio, profilePic, rating } = req.body;

        //? Check if teacher already exist
        const existTeacher = await teacherModel.findOne({ email });

        if (existTeacher) {
            return res.status(400).json({
                success: false,
                message: "Email Already exist"
            })
        }

        const teacher = await teacherModel.create({
            name, email, bio, profilePic, rating
        })

        return res.status(201).json({
            success: true,
            message: "Teacher created",
            data: teacher
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//! Get All Teachers
exports.getTeachers = async (req, res) => {
    try {
        const teachers = await teacherModel.find().sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "All teachers found",
            data: teachers,
            count: teachers.length
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//! Get Teacher by ID
exports.getTeacherById = async (req, res) => {
    try {
        const teacher = await teacherModel.findById(req.params.id)

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Teacher found",
            data: teacher,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}


//! Update Teacher
exports.updateTeacher = async (req, res) => {
    try {
        const { name, email, bio, profilePic, rating } = req.body

        const teacher = await teacherModel.findById(req.params.id)
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            })
        }


        //? check if email already exist
        if (email && email !== teacher.email) {
            const existingEmail = await teacherModel.findOne({ email })

            if (existingEmail) {
                return res.status(400).json({
                    success: false,
                    message: "Email already exist",
                })
            }
        }

        teacher.name = name || teacher.name
        teacher.email = email || teacher.email
        teacher.bio = bio || teacher.bio
        teacher.profilePic = profilePic || teacher.profilePic
        teacher.rating = rating || teacher.rating

        await teacher.save()


        return res.status(200).json({
            success: true,
            message: "Teacher Updated",
            data: teacher,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


//! Delete Teacher
exports.deleteTeacher = async (req, res) => {
    try {
        const teacher = await teacherModel.findById(req.params.id)

        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "teacher not found",
            })
        }

        await teacher.deleteOne()

        return res.status(200).json({
            success: true,
            message: "teacher Deleted Successfully",
            data: teacher,
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}