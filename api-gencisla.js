exports.apiGenCisla = function(req, res, q) {
    res.writeHead(200, {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"});
    let obj = {};
    if (q.query["max"] && q.query["min"]) {
        let max = q.query["max"];
        let min = q.query["min"];
        let n = Math.random();
        n = +min + Math.trunc((max-min+1)*n);
        obj.cislo = n;
    }
    res.end(JSON.stringify(obj))
};