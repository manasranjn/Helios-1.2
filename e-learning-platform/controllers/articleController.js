const Article = require('../models/article')

//! Create Article
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

//! Get All Articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: "All articles fetched",
            count: articles.length,
            data: articles

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//! Get Article by ID
exports.getArticleById = async (req, res) => {
    try {
        const id = req.params.id

        const article = await Article.findById(id)

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article Not Found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Article Found",
            data: article
        })

    } catch {
        return res.status(500).json({
            success: false,
            message: "Article Not Found",
        })
    }
}

//! Update Article
exports.updateArticle = async (req, res) => {
    try {
        const id = req.params.id

        const { title, description, image, author, category } = req.body

        const article = await Article.findById(id)

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article Not Found",
            })
        }

        //? Update Fields
        article.title = title || article.title
        article.description = description || article.description
        article.image = image || article.image
        article.author = author || article.author
        article.category = category || article.category

        await article.save()

        return res.status(200).json({
            success: true,
            message: "Article Updated Successfully",
            data: article
        })


    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

//! delete Article
exports.deleteArticle = async (req, res) => {
    try {
        const id = req.params.id

        const article = await Article.findById(id)

        if (!article) {
            return res.status(404).json({
                success: false,
                message: "Article Not Found",
            })
        }

        await article.deleteOne()

        return res.status(200).json({
            success: true,
            message: "Article Deleted successfully",
            data: article
        })

    } catch {
        return res.status(500).json({
            success: false,
            message: "Article Not Found",
        })
    }
}
