require('dotenv').config();
var request = require('request');

var urlLogin = process.env.NS_HOST + "/" + process.env.NS_APP + "/welcome";
var username = process.env.USERNAME;
var password = process.env.PASSWORD;
//http://localhost:9300/amsApp/contactComp/company-search-json?searchMethod=findAllCompanys
var urlFinder = process.env.NS_HOST + "/" + process.env.NS_APP + "/" + process.env.NS_COMP + "/" + process.env.NS_DATA_EL + "-seach-json?searchMethod=findAll" + process.env.NS_DATA_EL.substr(0,1).toUpperCase() + process.env.NS_DATA_EL.substr(1) + "s";

var executeFinder = function() {
	return new Promise(function(resolve,reject) {
		request.post(urlLogin, { form: { username: username, password: password } }, function(err, httpResponse, body) {
			if(err) {
				return reject(err);
			}
			request({url:urlFinder, headers:{'Cookie': httpResponse.headers["set-cookie"][0]}}, function(err,res,body) {
				if(err) {
					return reject(err);
				}
				resolve(JSON.parse(body));
			});
		});
	});
};

executeFinder()
	.then(function(data) {
		console.log(data);
	});