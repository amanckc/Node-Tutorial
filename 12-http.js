const http=require('http')

const server = http.createServer((req, res) =>{

    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('Welcome to about section')
    }

    res.end(`
        <h1> Opps! </h1>
        <p>End of internet!!</p>
        <a href="http:/">home page </a>
    `)


})

server.listen(5555);