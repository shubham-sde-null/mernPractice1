const fs = require("fs");
const http = require("http");

const data1 = {
    name: "shubham",
    age: 24,
    gender: "male",
};
const jsondata = JSON.stringify(data1);
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello shubham");
    } else if (req.url == "/api") {
        fs.readFile("data.json", "utf-8", (err, data) => {
            // res.end(data);
            const ogdata = JSON.parse(data);
            res.end(ogdata.name);
        });
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log("server 8000 started");
});