exports.apiKontCisla = function(req, res, q) {
    res.writeHead(200, {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"});
    let obj = {};
    if (q.query["guess"] && q.query["cislo"]) {
        let g = q.query["guess"];
        let n = q.query["cislo"];
        if (g>n){obj.vys = 1}
        else if (g<n){obj.vys = 2}
        else {obj.vys = 3}
    }
    res.end(JSON.stringify(obj))
};