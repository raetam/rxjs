// lib
const Rx = require('rxjs')
const {concatMap, mergeMap,map,take,tap} = require('rxjs/operators')

// stream
const s1 = Rx.from(['d1','d2','d3'])
const s2 = Rx.interval(1000).pipe(take(3),map(d=>d*2),tap(console.log))

// task
const t1 = (d) => new Promise((resolve,reject)=>setTimeout(()=>{
  console.log('t1',d)
  return resolve(d)}, 5000))
const t2 = (d) => new Promise((resolve,reject)=>setTimeout(()=>{
  console.log('t2',d)
  return resolve(d)}, 5000))
const t3 = (d) => new Promise((resolve,reject)=>setTimeout(()=>{
  console.log('t3',d)
  return resolve(d)}, 5000))

async function tasks(d){
  await t1(d)
  await t2(d)
  await t3(d)
} 

s2.pipe(
  mergeMap(d=> Rx.from(tasks(d))),
  // concatMap(d=> Rx.from(ts(d)))
).subscribe()

