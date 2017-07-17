const R = require('ramda');
const F = require('./functions');


var fp = (msg, a, f) => console.log('\x1b[36m%s\x1b[0m', msg, a, f(a))

var p = (f) => console.log(f())


var h2 = (s, f) => {
    var r = R.repeat('*', 20).join('')
    console.log('%s %s %s', r, s, r)
    f()
    console.log('%s %s end %s', r, s, r)
}


var h3 = (s, f) => {
    var r = R.repeat('=', 10).join('')
    console.log('%s %s %s', r, s, r)
    f()
    console.log("\n")
}

var chars = F.randArray(F.range('A', 'F'))
var numbers = F.randArray(F.range(1, 10))

var obj = R.zipObj(chars, numbers)
var objs = [
    {name: '张三', score: 59},
    {name: '李四', score: 73},
    {name: '王五', score: 91},
    {name: '陈六', score: 88},
    {name: '赵七', score: 61},
    {name: '吴八', score: 75},
]


h2('Ramda判断函数', () => {
    p(() =>
        R.gt(2, 1)
    )
    p(() =>
        R.lt(1, 2)
    )
    p(() =>
        R.gte(2, 2)
    )
    p(() =>
        R.lte(1, 1)
    )
    p(() =>
        R.is(Number, 0.1)
    )

    p(() =>
        R.isEmpty([])
    )
    p(() =>
        R.isEmpty({})
    )
    p(() =>
        R.isNil(undefined)
    )
    p(() =>
        R.isNil(null)
    )

    p(() =>
        R.max(789, 123)
    )
    p(() =>
        R.max('a', 'b')
    )
    p(() =>
        R.min('a', 'b')
    )
    p(() =>
        R.negate(42)
    )
    p(() =>

        R.type({})
    )

})


h2('Ramda集合函数', () => {


    h3('集合运算', () => {
        fp('head', chars, (a) =>
            R.head(a)
        )

        fp('last', chars, (a) =>
            R.last(a)
        )


        fp('apply Math.max', numbers, (a) =>
            R.apply(Math.max, a)
        )
        fp('map double', numbers, (a) =>
            R.map(x => x * 2, a)
        )

        fp('filter isEven', numbers, (a) =>

            R.filter(n => n % 2 === 0, a)
        )

        fp('reject notEven', numbers, (a) =>

            R.reject(n => n % 2 === 0, a)
        )

        fp('find 1 isEven item', numbers, (a) =>

            R.find(n => n % 2 === 0, a)
        )

        fp('mean', numbers, (a) =>
            R.mean(a)
        )
        fp('median', numbers, (a) =>
            R.median(a)
        )

        fp('reduce add', numbers, (a) =>
            R.reduce(R.add, 0, a)
        )


        fp('sort', numbers, (a) =>
            R.sort((a, b) => a - b, a)
        )


    })


    h3('判断函数', () => {
        fp('all equals 3?', R.repeat(3, 10), (a) =>
            R.all(R.equals(3))(a)
        )

        fp('any gt 1?', numbers, (a) =>

            R.any(R.gt(R.__, 1))(a)
        )


        fp('contains 9?', numbers, (a) =>

            R.contains(9, a)
        )



    })


    h3('加工函数', () => {
        fp('append X', chars, (a) =>

            R.append('X', a)
        )
        fp('prepend X', chars, (a) =>

            R.prepend('X', a)
        )


        fp("concat ['X','Y','Z']", chars, (a) =>

            R.concat(a, ['X', 'Y', 'Z'])
        )

        fp("groupBy", objs, (a) =>

            R.groupBy((student) => {
                var score = student.score;
                return score < 65 ? 'F' :
                    score < 70 ? 'D' :
                        score < 80 ? 'C' :
                            score < 90 ? 'B' : 'A';

            }, a)
        )

    })


    h3('遍历函数', () => {
        fp('forEach', numbers, (a) =>

            R.forEach(x => console.log(x * 2), a)
        )


    })


})


h2('对象函数', () => {


    fp('forEachObjIndexed', obj, (a) =>

        R.forEachObjIndexed((value, key) => console.log(key + ':' + value), a)
    )

    fp('hasIn A', obj, (a) =>

        R.hasIn('A', a)
    )

    fp('invert', obj, (a) =>

        R.invert(a)
    )

    fp('invertObj', obj, (a) =>

        R.invertObj(a)
    )
    fp('keys', obj, (a) =>

        R.keys(a)
    )
    fp('values', obj, (a) =>

        R.values(a)
    )
    fp('merge {x:1}', obj, (a) =>

        R.merge(a, {x: 1})
    )

    fp("omit ['A','B']", obj, (a) =>

        R.omit(['A', 'B'], obj)
    )
    fp("path ['a', 'b']", {a: {b: 2}}, (a) =>

        R.path(['a', 'b'], a)
    )
    fp("where  A value gt 0", obj, (a) =>

       R.where({
           A:R.gt(R.__,0)
       })(a)
    )

    fp("clone", obj, (a) =>

       R.clone(a)
    )

})


h2('字符串函数', () => {
    fp("startsWith a", 'abcde', (a) =>
        R.startsWith('a', a)
    )


    fp("test /^x/", 'xyz', (a) =>
        R.test(/^x/, a)
    )
})
h2('逻辑函数', () => {
    fp("when lenght >10 truncate", '0123456789ABC', (a) => {
        var truncate = R.when(
            R.propSatisfies(R.gt(R.__, 10), 'length'),
            R.pipe(R.take(10), R.append('…'), R.join(''))
        );
        return truncate(a);
    })


})
