// lib
const {of, from, concat, interval, merge} = require('rxjs')
const {take,tap,filter,map,reduce} = require('rxjs/operators')

// data
const d1 = ['d1','d2','d3']
const d2 = of('d1','d2','d3')
const d3 = new Promise((resolve,reject)=>setTimeout(()=>resolve('d1'),100))

// stream
const s1 = from(d1)

const s2 = from(d2)
const s_concat = concat(s1,s2)
const ss1 = interval(1000).pipe(take(3))
const ss2 = interval(1000).pipe(tap(d=>console.log("스트림에는 영향을 주지않음")))
const ss_merge = merge(ss1,ss2)

// subscribe
ss_merge.subscribe((d) => console.log(d))
// ss_concat.subscribe((d) => console.log(d))
// s1.subscribe({ next: (d) => console.log(d),complete: () => 1,error: (e) => e})

