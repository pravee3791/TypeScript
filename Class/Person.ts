export default class Person{
    private name:string;
    private phoneNUmber : number;
    address : string[]; 

    /**
     * 
     * @param _name 
     * @param _ph 
     * @param _address 
     */
    constructor(_name : string,_ph: number,_address: string[]) {
        this.name = _name;
        this.phoneNUmber = _ph;
        this.address = _address;
    }

    getDetails(){
        return `Mr. ${this.name} lives at ${this.address} whose phone number is ${this.phoneNUmber}`
    }
}