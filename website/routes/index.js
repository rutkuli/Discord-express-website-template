const express = require("express"),
        router = express.Router(),				
        session = require('express-session'); /*This is for if you want to use an express session*/		
			
router.get("/", async(req, res) => {
	res.render("home", {
		currentURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`		
	});
});

router.get("/home", async(req, res) => {
	res.render("home", {
		currentURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`
	});
});

module.exports = router;