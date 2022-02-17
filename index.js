const http = require('http')

const port = process.env.POR || 8080

const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('hello world')
    }
);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})