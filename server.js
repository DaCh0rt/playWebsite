var static = require('node-static');
var port = 8002
 
//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port, function(){
	console.log('Server started on port ' + port)
});
