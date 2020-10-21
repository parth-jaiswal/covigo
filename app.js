/* 
Connect Database
*/
const express = require('express');
const mongoose  = require ('mongoose');

const bodyParser  = require ('body-parser');
const path  = require ('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname+"/public"));

mongoose.connect('mongodb://localhost:27017/webtechDB', {useNewUrlParser: true});

const blogSchema = new mongoose.Schema({
  name: String,
  content: String,
  date: {type: Date, default:Date.now}
});

const Blog = mongoose.model('Blog',blogSchema);

// const blog1 = new Blog({
//   name: "Parth",
//   content: "Deserunt enim sint officia dolore ea velit. Proident id exercitation labore consequat ullamco culpa incididunt laborum labore. Proident Lorem id mollit cillum excepteur esse non cillum ad commodo ea. Quis duis sint labore fugiat exercitation nulla amet anim elit elit anim. Cupidatat reprehenderit ullamco consectetur nulla. Exercitation nulla ullamco dolor magna eu nulla ad labore anim dolore commodo dolore exercitation adipisicing. Aliqua labore proident aliqua culpa nisi mollit." 
// });

//blog1.save()


app.get("/",(req, res) =>{
  res.sendFile('index.html' );
});

app.get("/createBlog", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/createBlog.html'));
});

app.post("/createBlog", (req,res)=>{
  let name = req.body.name;
  console.log(req.body.blog);
  const newBlog = new Blog({
    name: name,
    content: req.body.blog
  });
  newBlog.save();
});

app.get("/blog", (req, res)=> {

})

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
