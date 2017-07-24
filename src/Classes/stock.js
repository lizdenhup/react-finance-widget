export default class Stock {
    constructor(
        stockObject
    ) {
        this.name = stockObject.name
        this.id = stockObject.stock_id //in Rails DB
        this.openingPrice = stockObject.openingPrice
        this.closingPrice = stockObject.closingPrice 
        this.low = stockObject.low 
        this.high = stockObject.high 
        this.volume = stockObject.volume 
        this.lastRefreshed = stockObject.lastRefreshed 
    }
}