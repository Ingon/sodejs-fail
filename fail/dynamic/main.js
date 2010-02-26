var migrationConn = require("db-core").pgConnect("fail");
require("fail-migrations").migrate(migrationConn);
migrationConn.close();

var con = require("db-core").pgConnect("fail");

var dao = require("dao").init(con);
dao.register("fails");

try {
	require("fail-actions").execute();
} finally {
	con.close();
}