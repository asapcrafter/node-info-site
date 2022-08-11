const http = require('http')
const fs = require('fs')

const port = process.env.POR || 8080
const server = http.createServer((req, res) => {
    let fileName = req.url
    if (req.url === '/') fileName = '/index'
    
    fs.readFile(`.${fileName}.html`, function(err, data){
        if (err) {
            fs.readFile('./404.html', (err, content) => {
                res.writeHead(404, {'Content-Type': 'text.html'})
                console.log('Error')
                return res.end(content)
            })
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        }
    })   
});

server.listen(port, () => {
    console.log(`Server is running on port . View the page with this url "localhost:8080"`)
})