export class Box {
    _name;
    _objs;
    constructor(name) {
        this._name = name;
        this._objs = [];
    }
    addObject(obj) {
        this._objs.push(obj);
    }
    async getFile(uri) {
        const response = await fetch(uri);
        if (!response.ok) {
            return new ArrayBuffer(0);
        }
        else {
            return response.arrayBuffer();
        }
    }
}
