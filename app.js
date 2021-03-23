const express = require('express')
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

/* Connect To Mongo DB */
const dbURI = 'mongodb+srv://test:test@123@kbc.1hu7l.mongodb.net/node-js?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => {
    console.log('DB Connected');
    app.listen(3000, ()=> console.log('App started on port 3000'));
})
.catch(err => console.log(err));

//Configuring ejs
app.set('view engine', 'ejs');
app.set('views', 'ejs-views');

//serve static files
app.use(express.static('public'));

//logger middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true}))


/* Custom Middleware */
// app.use((req, res, next) => {
//     console.log('New Request Made');
//     console.log(req.hostname, req.path, req.method);
//     next();
// });



/*Save to MongoDb */
// app.get('/add-blog', (req, res) => {
//     const newBlog = new Blog({
//         title : 'TVF',
//         author: 'Jeetu',
//         body : 'bhaag bc'
//     })
//     newBlog.save()
//     .then(result => res.send(result))
//     .catch(err => console.log(err));
// })

/*All Blogs */
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then(result => res.send(result))
//     .catch(err => console.log(err));
// })

app.use('/blogs',blogRoutes);


app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', {title : 'About'});
})


//Routes

/* Redirect */
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

//404
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404');
});