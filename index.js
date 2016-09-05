var request = require('request');

request.post('http://localhost:9300/amsApp/welcome', { form: { username: "admin", password: "testAdmin" } }, function(err, httpResponse, body) {
	var cookie = httpResponse.headers["set-cookie"][0];
	console.log("Cookie:", cookie);
	//request({url:"http://localhost:9300/amsApp/contactComp/company-search-json?searchMethod=findAllCompanys", headers:{'Cookie':cookie}}, function(err,res,body) {
	request({url:"http://localhost:9300/amsApp/contactComp/company-find-json?searchMethod=findByNameEq&name=test", headers:{'Cookie':cookie}}, function(err,res,body) {
		//console.log(JSON.parse(body).list.map(function(row) {return row.name}));
		console.log(JSON.parse(body));
	});
});