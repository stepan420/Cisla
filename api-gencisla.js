let obj = {};
obj.odp = "";
exports.apiGenCisla = function(req, res, q) {
    res.writeHead(200, {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"});
    if (q.pathname === "/gencisla/nove"){
        if (q.query["max"] && q.query["min"]) {
            let max = q.query["max"];
            let min = q.query["min"];
            let n = Math.random();
            n = +min + Math.trunc((max - min + 1) * n);
            obj.cislo = n;
        }
    }
    else if (q.pathname.endsWith("/gencisla/kontrola")){
        if (q.query["guess"]){
            let g = q.query["guess"];
            let n = obj.cislo;
            if (g>n){
                obj.vys = "Moc";
                obj.odp = obj.odp + g + " > Hledané číslo<br>"
            }
            else if (g<n){
                obj.vys = "Málo";
                obj.odp = obj.odp + g + " < Hledané číslo<br>"
            }
            else {
                obj.vys = "SPRÁVNĚ";
                obj.odp = ""
            }
        }
    }
    res.end(JSON.stringify(obj));
};