/* (truncated) compact time series data for Nike on 6/8/17 */
// var ticker = DATA['Meta Data']['2. Symbol']
// var date = Object.keys(DATA['Time Series (Daily)'])[0]
// var openingPrice = Object.values(DATA['Time Series (Daily)'])[0]['1. open']
// var high = Object.values(DATA['Time Series (Daily)'])[0]['2. high']
// var low = Object.values(DATA['Time Series (Daily)'])[0]['3. low']
// var closingPrice = Object.values(DATA['Time Series (Daily)'])[0]['4. close']


const sampleData = [
  {d1: 'Data', d2: 'Data', d3: 'Data', d4: 'Data', d5: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data', d4: 'Data', d5: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data', d4: 'Data', d5: 'Data'}
];

// const DATA = 
//     {
//         "Meta Data": {
//             "1. Information": "Daily Prices (open, high, low, close) and Volumes",
//             "2. Symbol": "NKE",
//             "3. Last Refreshed": "2017-06-08 16:00:00",
//             "4. Output Size": "Compact",
//             "5. Time Zone": "US/Eastern"
//         },
//         "Time Series (Daily)": {
//             "2017-06-08 16:00:00": {
//             "1. open": "53.5400",
//             "2. high": "54.1400",
//             "3. low": "53.1500",
//             "4. close": "53.1900",
//             "5. volume": "6178115"
//             },
//             "2017-06-07": {
//             "1. open": "52.7900",
//             "2. high": "53.3600",
//             "3. low": "52.7500",
//             "4. close": "53.2300",
//             "5. volume": "7416029"
//             },
//             "2017-06-06": {
//             "1. open": "52.9000",
//             "2. high": "53.1000",
//             "3. low": "52.4300",
//             "4. close": "52.4800",
//             "5. volume": "8923047"
//             },
//             "2017-06-05": {
//             "1. open": "53.0000",
//             "2. high": "53.2300",
//             "3. low": "52.7000",
//             "4. close": "53.0100",
//             "5. volume": "5748870"
//             },
//             "2017-06-02": {
//             "1. open": "52.7000",
//             "2. high": "53.0100",
//             "3. low": "52.3600",
//             "4. close": "52.9800",
//             "5. volume": "18511069"
//             }    
//         }
// }







//     /* 
//     // Playing around to see how to best extract the data from the deeply
//     nested object: 
//     ///First step: simply return that day's data in a table component:
//     const ticker = DATA['Meta Data']['2. Symbol']
//     const date = Object.key(DATA['Time Series (Daily)'])[0]
//     const openingPrice = Object.values(DATA['Time Series (Daily)'])[0]['1. open']
//     const high = Object.values(DATA['Time Series (Daily)'])[0]['2. high']
//     const openingPrice = Object.values(DATA['Time Series (Daily)'])[0]['3. low']
//     const closingPrice = Object.values(DATA['Time Series (Daily)'])[0]['4. close']




//     /////////
//     Procedure for cleaning up timeSeries data from AV:
//     1. Extract dates
//         tradingDates = [];
//         for (let key in stockData['Time Series (Daily)']) {
//             tradingDates.push(key);
//         }
//         => now the array looks like this:
//         [ 'date',
//         ...,
//         'lastDate']
//     2. Extract dailyOpen prices
//         dailyOpen = [];
//         for (let dailyData of Object.values(stockData['Time Series (Daily)'])) {
//             console.log(dailyData['1. open']);
//             dailyOpen.push(dailyData['1. open']);
//         }
//         timeSeriesData = [tradingDates[i], dailyOpen[i]]
//     */
// export default DATA; 
export default sampleData; 
