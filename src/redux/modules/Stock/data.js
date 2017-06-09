/* (truncated) compact time series data for Nike on 6/8/17 */

const DATA = 
    {
        "Meta Data": {
            "1. Information": "Daily Prices (open, high, low, close) and Volumes",
            "2. Symbol": "NKE",
            "3. Last Refreshed": "2017-06-08 16:00:00",
            "4. Output Size": "Compact",
            "5. Time Zone": "US/Eastern"
        },
        "Time Series (Daily)": {
            "2017-06-08 16:00:00": {
            "1. open": "53.5400",
            "2. high": "54.1400",
            "3. low": "53.1500",
            "4. close": "53.1900",
            "5. volume": "6178115"
            },
            "2017-06-07": {
            "1. open": "52.7900",
            "2. high": "53.3600",
            "3. low": "52.7500",
            "4. close": "53.2300",
            "5. volume": "7416029"
            },
            "2017-06-06": {
            "1. open": "52.9000",
            "2. high": "53.1000",
            "3. low": "52.4300",
            "4. close": "52.4800",
            "5. volume": "8923047"
            },
            "2017-06-05": {
            "1. open": "53.0000",
            "2. high": "53.2300",
            "3. low": "52.7000",
            "4. close": "53.0100",
            "5. volume": "5748870"
            },
            "2017-06-02": {
            "1. open": "52.7000",
            "2. high": "53.0100",
            "3. low": "52.3600",
            "4. close": "52.9800",
            "5. volume": "18511069"
            }    
        }
    }

    /* 
    // Playing around to see how to best extract the data from the deeply
    nested object: 
    
    let enumerableKeys = [];
    for (let key in stockData['Time Series (Daily)']) {
        enumerableKeys.push(key);
    }
    enumerableKeys 
    => is an array of dates
    ["2017-06-08 16:00:00", "2017-06-07", "2017-06-06", "2017-06-05", "2017-06-02"]

    dailyDataPoints = [];
    for (let dailyData of Object.values(stockData['Time Series (Daily)])) {
        console.log(dailyData)
    }
    => outputs n objects of the form:
    {1. open: "53.5400", 2. high: "54.1400", 3. low: "53.1500", 4. close: "53.1900", 5. volume: "6178115"}
    where n is the number of days in the time series
    */
export default DATA; 