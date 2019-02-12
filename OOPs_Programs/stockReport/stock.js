
class Stock
{
    /**
     * 
     * @param {string} name 
     * @param {Number} numberOfShares 
     * @param {Number} sharePrice 
     */
    constructor(name, numberOfShares, sharePrice)
    {
        this.name = name;
        this.numberOfShare = numberOfShares;
        this.sharePrice = sharePrice;
    }
    /**
     * Return the value of the stock.
     */
    valueOfStock()
    {
        return this.numberOfShare * this.sharePrice;
    }
}
module.exports={Stock}
