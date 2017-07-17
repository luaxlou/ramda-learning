const R = require('ramda');

var range = R.curry((from, to) => {

    if(Number.isInteger(from))
    {
        return R.range(from,to)
    }

    var result = []

    for (var i = from.charCodeAt(0); i <= to.charCodeAt(0); i++) {

        result.push(String.fromCharCode(i))
    }
    return result
})

var randArray = R.curry((arr) => {

    return arr.sort(function(){ return 0.5 - Math.random() })

})


module.exports = {
    range: range,
    randArray:randArray
}

