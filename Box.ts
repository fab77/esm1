import { BoxObject } from "./BoxObject.js";


export class Box{
    
    _name:string;
    _objs: BoxObject[];

    constructor(name: string) {
        this._name = name;
        this._objs = [];
    }
    
    addObject(obj: BoxObject) {
        this._objs.push(obj);
    }
}