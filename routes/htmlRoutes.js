console.log("htmlRoutes is being loaded");

app.get("/", function(req, res) {
  res.render("index");
});
