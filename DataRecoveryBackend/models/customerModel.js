let Document = require('camo').Document;

module.exports = class Customer extends Document{
    constructor() {
        super();
        this.firstName = String;
        this.lastName = String;
        this.tel = Number;
        this.email = String;
        this.city = String;
        this.street = String;
        this.houseNumber = Number;
    }
}


