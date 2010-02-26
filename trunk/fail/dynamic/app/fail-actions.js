var act = require("act");
var req = require("req");
var resp = require("resp");

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