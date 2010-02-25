var migrationConn = require("db-core").pgConnect("fail");
require("fail-migrations").migrate(migrationConn);
migrationConn.close();

var con = require("db-core").pgConnect("fail");

(function service() {
	var resp = require("resp");
	resp.write("js hellonche");
	resp.flush();
})();
