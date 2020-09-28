/**
 택배 시스템
 0. 종업원은 3명
 1. task[1,2,3]
 2. 배송(10개씩)
 */
const {of, interval,from} =require("rxjs");
const {delay, tap, take , concatAll ,map, reduce, bufferCount, mergeAll} = require("rxjs/operators");

const t1 = (data) => of(data).pipe(
  delay(3000),
  tap(data=>console.log(data+'processed by t1'))
)
const t2 = (data) => of(data).pipe(
  delay(3000),
  tap(data=>console.log(data+'processed by t2'))
)
const t3 = (data) => of(data).pipe(
  delay(3000),
  tap(data=>console.log(data+'processed by t3'))
)

const doTask = (data) => from( [t1(data),t2(data),t3(data)]).pipe(
  concatAll(),
  reduce((acc,data_) => data)
)
const send = interval(1000).pipe(take(1000))

function sendToAirport(){}

// send.pipe(
//   map(data => doTask(data)),
//   mergeAll(3),
//   bufferCount(10),
//   // tap(data_10 => sendToAirport(data_10))
//   tap(console.log)
// ).subscribe()

console.log(t1("A"))