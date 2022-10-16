function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
module.exports.shubham = add;
module.exports.pawar = sub;
module.exports = { add, sub };