// lib
const Rx = require('rxjs')
const {
  concatAll,
  mergeAll,
  concatMap,
  mergeMap,
  take,tap} = require('rxjs/operators')

// stream
const s1 = Rx.interval(1000).pipe(take(3),tap(console.log))
const s2 = Rx.interval(1000).pipe(take(3),tap(console.log))
const s3 = Rx.interval(1000).pipe(take(3),tap(console.log))
const s4 = Rx.interval(1000).pipe(take(3),tap(console.log))
const s5 = Rx.interval(1000).pipe(take(3),tap(console.log))
const s6 = Rx.of(s1,s2,s3,s4,s5)
s6.pipe(
  concatAll()
  // mergeAll(3)
).subscribe()