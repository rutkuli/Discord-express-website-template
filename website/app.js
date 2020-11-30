module.exports.load = async(client) => {

	const express = require("express"),
		session = require("express-session"),
		path = require("path"),		
		config = require("../config"),
		app = express();
	
	const mainRouter = require("./routes/index");
	
	app	    
		.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.engine("html", require("ejs").renderFile)
		.set("view engine", "ejs")
		.use(express.static(path.join(__dirname, "/public")))
		.set("views", path.join(__dirname, "/views"))
		.set("port", config.website.port)
		.use('/routes/index', require('./routes/index'))
		.use(session({ secret: config.website.expressSessionPassword, resave: false, saveUninitialized: false }))
		.use("/", mainRouter)
		.use(function(req, res, next){
			res.status(404).render("404", {
			currentURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`
			});
        });

	app.listen(app.get("port"), () => {
		console.log("Express website template is running on port "+app.get("port"));
	});
};