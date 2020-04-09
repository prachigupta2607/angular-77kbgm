interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export class personModel {
  private _name: string;
  private _fName: string;
  private _lName: string;
  private _age: number;
  private _mobile: string;
  private _address: string;
  private _id: number;
  private _street: string;
  private _city: string;
  private _state: string;
  private _zip: string;

  get id(): number {
    return this._id;
  }
  set id(val: number) {
    this._id = val;
  }

  get fName(): string {
    return this._fName;
  }

  set fName(val: string) {
    this._fName = val;
  }

  get lName(): string {
    return this._lName;
  }

  set lName(val: string) {
    this._lName = val;
  }

  get name(): string {
    return this.fName + " " + this.lName;
  }

  get age(): number {
    return this._age;
  }

  set age(val: number) {
    this._age = val;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(val: string) {
    this._mobile = val;
  }

  get address(): string {
    return this.street + ", " + this.city + ", " + this.state + ", " + this.zip;
  }

  get street(): string {
    return this._street;
  }

  set street(val: string) {
    this._street = val;
  }

  get state(): string {
    return this._state;
  }

  set state(val: string) {
    this._state = val;
  }

  get city(): string {
    return this._city;
  }

  set city(val: string) {
    this._city = val;
  }

  get zip(): string {
    return this._zip;
  }

  set zip(val: string) {
    this._zip = val;
  }
}
