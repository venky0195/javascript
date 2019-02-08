
class Stock
{
    constructor(name, numberOfShares, sharePrice)
    {
        this.name = name;
        this.numberOfShare = numberOfShares;
        this.sharePrice = sharePrice;
    }

    valueOfStock()
    {
        return this.numberOfShare * this.sharePrice;
    }
}
module.exports={Stock}
