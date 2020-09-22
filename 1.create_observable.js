const Rx = require('rxjs')

// 배열 데이타
const data1 = ['d1','d2','d3']
const stream1 = Rx.from(data1)
stream1.subscribe({
  // next: (d) => console.log(d),
  complete: () => 1,
  error: (e) => e
})

// 프로미스 데이타
const data2 = () => (new Promise((resolve,reject)=>setTimeout(()=>resolve('d1'),3000)))
const stream2 = Rx.from(data2())
stream2.subscribe({
  // next: (d) => console.log(d)
})

// 임의 데이타
const data3 = Rx.of('d1','d2','d3')
const stream3 = Rx.from(data3)
stream3.subscribe({
  next: (d) => console.log(d),
  // complete: () => 1,
  // error: (e) => e
})