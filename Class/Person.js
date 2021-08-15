"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    /**
     *
     * @param _name
     * @param _ph
     * @param _address
     */
    function Person(_name, _ph, _address) {
        this.name = _name;
        this.phoneNUmber = _ph;
        this.address = _address;
    }
    Person.prototype.getDetails = function () {
        return "Mr. " + this.name + " lives at " + this.address + " whose phone number is " + this.phoneNUmber;
    };
    return Person;
}());
exports["default"] = Person;
