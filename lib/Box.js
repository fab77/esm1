export class Box {
    constructor(name) {
        this._name = name;
        this._objs = [];
    }
    addObject(obj) {
        this._objs.push(obj);
    }
}
