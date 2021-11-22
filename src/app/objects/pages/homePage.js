const BasePage = require('./basePage');
const MainHeader = require('../controls/mainHeader');

class HomePage extends BasePage {
    constructor() {
        super();

        //elements
        this.mainLogo = element(by.css('.protractor-logo'));
        this.columnTitles = element.all(by.css('.col-sm-4>h3'));
    }

    get header() {
        return new MainHeader();
    }
}

module.exports = HomePage;