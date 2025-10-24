const {BasePage } = require('./BasePage');

exports.HomePage = class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.product  ='.inventory_item:first-child button';
        this.cartIcon = '.shopping_cart_link';
        
    }
async addFirstProductToCart(){
    await this.click(this.product);
    } 
async openCart(){
    await this.click(this.cartIcon);
    }
};