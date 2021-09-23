const express = require("express");
const moduleToFetch = require("./index");
const getDatabase = moduleToFetch.getDatabase;
// importing our function
const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
const port = 8000;

const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/users", async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});

// our newly added bit of code
app.post("/submit-form", async (req, res) => {
  const name = req.body.name;
  const role = req.body.role;
  await newEntryToDatabase(name, role);
  res.redirect("/");
  res.end();
});

// $.ajax({
// type: 'POST',
//     url: "http://localhost:8000/", 
//     data: "/users",
//     success: function(res) {
//             $('#userContainer').html(res).delay(2000);
//     }
// });     

app.listen(port, console.log(`Server started on ${port}`));