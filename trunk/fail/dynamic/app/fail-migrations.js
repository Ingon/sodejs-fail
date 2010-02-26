var dbm = require("db-migrations");

dbm.version(0, "initial", function(con) {
	con.update("CREATE TABLE fails (id SERIAL, name VARCHAR(255), PRIMARY KEY (id))");
});

dbm.version(1, "fail-description", function(con) {
	con.update("ALTER TABLE fails ADD description VARCHAR(1024)");
});

dbm.version(2, "fail-test", function(con) {
	con.update("INSERT INTO fails (name, description) VALUES (?, ?)", 'First case', 'Full description');
});

exports.migrate = function(con) {
	dbm.migrate(con);
}
