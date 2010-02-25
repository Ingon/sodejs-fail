var dbm = require("db-migrations");

dbm.version(0, "initial", function(con) {
	con.update("CREATE TABLE fails (id SERIAL, name VARCHAR(255), PRIMARY KEY (id))");
});

dbm.version(1, "fail-description", function(con) {
	con.update("ALTER TABLE fails ADD description VARCHAR(1024)");
});

exports.migrate = function(con) {
	dbm.migrate(con);
}
