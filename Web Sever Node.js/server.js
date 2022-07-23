const http = require('http')
const port = 3000

const server = http.createServer(function(req ,res){
    res.write('Web Server In Node.js')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something Went Wrong', error)
    }
    else{
        console.log('Sever Started Sucessfully', + port)
    }
})