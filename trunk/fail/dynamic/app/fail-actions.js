var act = require("act");
var req = require("request");
var resp = require("response");

act.register("fails", {
	all : function() {
		resp.json(dao.fails.all());
	},
	
	get : function() {
		var id = req.geti("id");
		resp.json(dao.fails.get(id));
	},
});

exports.execute = function() {
	act.execute();
};
