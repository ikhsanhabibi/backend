var restify = require("restify");
var server = restify.createServer({name: "IkshanBackend"})

function getChartDataFromDisk(req, res, next){
    //GEt The data frfom the disk
    console.log("Got Request, sending response....")
    var dataToSend = require(`./${req.params.filename}`)
    res.send(200,dataToSend)
    next()
}
server.get('/getChart/:filename', getChartDataFromDisk)

server.listen(8080, function(){
    console.log('%s is listening at %s', server.name, server.url)
})
