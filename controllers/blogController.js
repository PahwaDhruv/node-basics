const Blog = require('../models/blog');

const blog_index = (req, res)=> {
    Blog.find().sort({ createdAt: -1})
    .then(result => res.render('blogs/index', {title: 'Home', blogs: result}))
    .catch(err => console.log(err));
}

const blog_create_get = (req, res) =>{
    res.render('blogs/createBlog', {title: 'Create Blog'})
}

const blog_create_post = (req, res) => {
    const newBlog = new Blog(req.body);
    newBlog.save()
    .then(result => res.redirect('/blogs'))
    .catch(err => console.log(err));
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'})
    })
    .catch(err => console.log(err));
}

const blog_detail = (req, res)=> {
    Blog.findById(req.params.id)
    .then(result => res.render('blogs/details', {title: 'Blog Details', blog: result}))
    .catch(err => {
        console.log(err);
        res.render('404', {title : 'Blog not found'})
    });
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_detail,
    blog_delete
}