require("fail-migrations");

var resp = require("resp");

(function service() {
	resp.write("js hellonche");
	resp.flush();
})();
