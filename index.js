const http = require('http')
const fs = require('fs')

const port = process.env.POR || 8080

const server = http.createServer((req, res) => {
    let fileName = req.url
    if (req.url === '/') fileName = './index'
        fs.readFile(`${fileName}.html`, function(err, data){
            if (err) {
                res.writeHead('.404.html', {'Content-Type': 'text.html'})
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end
        })
        // res.statusCode = 200
        // res.setHeader('Content-Type', 'text/html')
        // res.end('hello world')
    }
);

server.listen(port, () => {
    console.log(`Server is running on port ${port}. View the page with this url "localhost:${port}"`)
})