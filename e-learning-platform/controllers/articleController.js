const Article = require('../models/article')

exports.createArticle = async (req, res) => {
    try {
        const { title, description, images, author, category } = req.body

        //? Validation
        if (!title || !description || !author || !category) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the required fileds"
            })
        }

        //! Create Article
        const article = await Article.create({
            title,
            description,
            images,
            author,
            category
        })

        return res.status(201).json({
            success: true,
            message: "Article Created",
            data: article
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}