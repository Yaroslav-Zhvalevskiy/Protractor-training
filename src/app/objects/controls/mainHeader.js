const BaseObject = require('../baseObject');

class MainHeader extends BaseObject {
    constructor() {
        super();
        this.container = element(by.css('.navbar-collapse'));

        //elements
        this.mainItems = this.container.all(by.css('.navbar-nav>li'));
    }
}

module.exports = MainHeader;