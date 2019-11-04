const http = require("http");
const fs = require("fs");
const url = require("url");
const apiGenCisla = require("./api-gencisla").apiGenCisla;
const apiKontCisla = require("./api-kontcisla").apiKontCisla;

function processStaticFiles(res, fileName) {
    fileName = fileName.substr(1);
    console.log(fileName);
    let contentType = "text/html";
    if (fileName.endsWith(".png")) {contentType = "image/png"}
    else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {contentType = "image/jpeg";}
    if (fs.existsSync(fileName)) {
        fs.readFile(fileName, function(err, data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        });
    }
    else {
        res.writeHead(404);
        res.end();
    }
}
http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    if (q.pathname === "/") {
        processStaticFiles(res, "/cisla.html");
        return;
    }
    if (q.pathname.length - q.pathname.lastIndexOf(".") < 6) {
        processStaticFiles(res, q.pathname);
        return;
    }
    else if (q.pathname === "/gencisla") {apiGenCisla(req, res, q)}
    else if (q.pathname === "/kontcisla") {apiKontCisla(req, res, q)}
    else{
        res.writeHead(200, {"Content-type":"text/html"});
        res.end("<html style='font-family: Calibri; font-size: 500px' lang='cs'><head><meta charset='UTF8'><title></title></head><body></body></html>")
    }
}).listen(88);