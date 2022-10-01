import { BoxObject } from "./BoxObject.js";
export class Box {

    _name: string;
    _objs: BoxObject[];

    constructor(name: string) {
        this._name = name;
        this._objs = [];
        console.log("created browser box for "+name);
    }

    addObject(obj: BoxObject) {
        this._objs.push(obj);
    }

    async getFile(uri: string): Promise<ArrayBuffer> {
        // const response = await fetch(uri);
        const response = await window.fetch(uri);
        if (!response.ok) {
            return new ArrayBuffer(0);
        } else {
            return response.arrayBuffer();
        }

    }
}