import express from 'express'
import bodyParser from 'body-parser'
import { title } from 'node:process';
 
const app=express();
const port=3000;


//Middleware
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

//Dummy data
let blogs = [
    { id:1, title: 'First Blog', content: 'This is the content of the first blog.',author: "Admin" },
    { id:2, title: 'Second Blog', content: 'This is the content of the second blog.',author: "User" },
    { id:3, title: 'Third Blog', content: 'This is the content of the third blog.',author: "Admin" },
];

//Routes
app.get('/',(req,res)=>{
    res.render('home',{title:'HOME BLOG'})
});

app.get('/blogs',(req,res)=>{
    res.render('blogs',{blogs})
});

app.get('/blods/:id',(req,res)=>{
    let blog=blogs.find(l=>l.id===req.params.id)
    if(!blog){return res.status(404).send('file does not exist')}
    res.render('blogDetails',{blog})
});

app.get('add-blog',(req,res)=>{
    res.render('addBlog')
})

