# ramda-learning
学习ramda笔记
> npm install

> npm test

整理实用性比较强的函数


```javascript
******************** Ramda判断函数 ********************
true
true
true
true
true
true
true
true
true
789
b
a
-42
Object
******************** Ramda判断函数 end ********************
******************** Ramda集合函数 ********************
========== 集合运算 ==========
head [ 'A', 'B', 'D', 'E', 'F', 'C' ] A
last [ 'A', 'B', 'D', 'E', 'F', 'C' ] C
apply Math.max [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] 9
map double [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] [ 10, 8, 4, 6, 14, 16, 12, 18, 2 ]
filter isEven [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] [ 4, 2, 8, 6 ]
reject notEven [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] [ 5, 3, 7, 9, 1 ]
find 1 isEven item [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] 4
mean [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] 5
median [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] 5
reduce add [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] 45
sort [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


========== 判断函数 ==========
all equals 3? [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ] true
any gt 1? [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] true
contains 9? [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] true


========== 加工函数 ==========
append X [ 'A', 'B', 'D', 'E', 'F', 'C' ] [ 'A', 'B', 'D', 'E', 'F', 'C', 'X' ]
prepend X [ 'A', 'B', 'D', 'E', 'F', 'C' ] [ 'X', 'A', 'B', 'D', 'E', 'F', 'C' ]
concat ['X','Y','Z'] [ 'A', 'B', 'D', 'E', 'F', 'C' ] [ 'A', 'B', 'D', 'E', 'F', 'C', 'X', 'Y', 'Z' ]
groupBy [ { name: '张三', score: 59 },
  { name: '李四', score: 73 },
  { name: '王五', score: 91 },
  { name: '陈六', score: 88 },
  { name: '赵七', score: 61 },
  { name: '吴八', score: 75 } ] { F: [ { name: '张三', score: 59 }, { name: '赵七', score: 61 } ],
  C: [ { name: '李四', score: 73 }, { name: '吴八', score: 75 } ],
  A: [ { name: '王五', score: 91 } ],
  B: [ { name: '陈六', score: 88 } ] }


========== 遍历函数 ==========
10
8
4
6
14
16
12
18
2
forEach [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ] [ 5, 4, 2, 3, 7, 8, 6, 9, 1 ]


******************** Ramda集合函数 end ********************
******************** 对象函数 ********************
A:5
B:4
D:2
E:3
F:7
C:8
forEachObjIndexed { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 }
hasIn A { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } true
invert { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { '2': [ 'D' ],
  '3': [ 'E' ],
  '4': [ 'B' ],
  '5': [ 'A' ],
  '7': [ 'F' ],
  '8': [ 'C' ] }
invertObj { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { '2': 'D', '3': 'E', '4': 'B', '5': 'A', '7': 'F', '8': 'C' }
keys { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } [ 'A', 'B', 'D', 'E', 'F', 'C' ]
values { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } [ 5, 4, 2, 3, 7, 8 ]
merge {x:1} { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8, x: 1 }
omit ['A','B'] { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { D: 2, E: 3, F: 7, C: 8 }
path ['a', 'b'] { a: { b: 2 } } 2
where  A value gt 0 { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } true
clone { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 } { A: 5, B: 4, D: 2, E: 3, F: 7, C: 8 }
******************** 对象函数 end ********************
******************** 字符串函数 ********************
startsWith a abcde true
test /^x/ xyz true
******************** 字符串函数 end ********************
******************** 逻辑函数 ********************
when lenght >10 truncate 0123456789ABC 0123456789…
******************** 逻辑函数 end ********************