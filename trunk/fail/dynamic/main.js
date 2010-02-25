var db = require("db-core");
db.pgLoad();
var con = db.pgConnect("fail");

require("fail-migrations").migrate(con);

(function service() {
	var resp = require("resp");
	resp.write("js hellonche");
	resp.flush();
})();
