const express = require('express');
const mongoose  = require ('mongoose');
const bodyParser  = require ('body-parser');
const path  = require ('path');
const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+"/public"));

mongoose
	.connect(
		"mongodb+srv://Parth:Fns6Af04pEmPkk7m@cluster0.xwglb.mongodb.net/webtechDB?retryWrites=true&w=majority",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("Connected to Mongodb");
	})
	.catch((err) => console.log(err));

const blogSchema = new mongoose.Schema({
	name: { type: String, required: true },
	content: { type: String, required: true },
	date: { type: Date, default: Date.now },
	email: { type: String, required: true },
});



const Blog = mongoose.model('Blog', blogSchema);

// const blog1 = new Blog({
//   name: "Parth",
//   content: "Deserunt enim sint officia dolore ea velit. Proident id exercitation labore consequat ullamco culpa incididunt laborum labore. Proident Lorem id mollit cillum excepteur esse non cillum ad commodo ea. Quis duis sint labore fugiat exercitation nulla amet anim elit elit anim. Cupidatat reprehenderit ullamco consectetur nulla. Exercitation nulla ullamco dolor magna eu nulla ad labore anim dolore commodo dolore exercitation adipisicing. Aliqua labore proident aliqua culpa nisi mollit." 
// });

// blog1.save()


app.get("/",(req, res) =>{
  res.sendFile(__dirname+'/public/index.html' );
});

app.get("/createBlog", (req, res) => {
  res.sendFile(__dirname + "/public/createBlog.html");
});

app.post("/createBlog", (req,res)=>{
  let name = req.body.name;
  console.log(req.body.blog);
  const newBlog = new Blog({
    name: name,
    email: req.body.email,
    content: req.body.blog
  });
  newBlog.save();

  res.redirect('/blog');
});

app.get('/blog', (req, res)=> {
  res.sendFile(__dirname + "/public/blog.html");
})

app.get("/blogAPI", (req, res) => {
  const dataPromise = new Promise((resolve, reject)=>{
    let data = Blog.find();
    if(data) {
      resolve(data);
    } else {
      reject ('failed to resolve data');
    }
  })
  dataPromise.then((data) => {
    res.send(data);
  })
  .catch((error)=> {
    console.log(error);
  })
})

app.get('/stateWise', (req, res)=>{
  res.sendFile(__dirname+'/public/stateWise.html')
});

app.listen(port, () => {
  console.log("Server started at port 3000");
});
