// 주식거래 시스템
// 10초 -> 1회 거래
// 1번거래 :: 1000회 api call & 동시요청은 10회이내
// 에러시 -> 2번반복
// 성공시 -> 10개로 나누기 & 저장 & 비동기

const { from, range } = require("rxjs")
const { map, mergeAll, reduce, mergeMap } = require("rxjs/operators")


const trade$= (tradeNumber) => range(0,1000).pipe(
  map(() => apiCall$().pipe(delay(5000)) ),
  mergeAll(10),
  retry(2),
  reduce((acc,data)=>{
    return tradeNumber
  })
)
const apiCall$ = () => from(Axios.get('https://naver.com'))

const saveResult=  () => {}

interval(10*1000).pipe(
  mergeMap((tradeNumber)=>stratTrade$(tradeNumber)),
  berfferCount(10),
  mergeMap(result => saveResult$(result))
)