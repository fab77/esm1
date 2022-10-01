import { BoxObject } from "./BoxObject.js";
import fetch from "node-fetch";

export class Box{

    _name: string;
    _objs: BoxObject[];

    constructor(name: string) {
        this._name = name;
        this._objs = [];
        console.log("created node box for "+name);
    }

    addObject(obj: BoxObject) {
        this._objs.push(obj);
    }

    async getFile(uri: string): Promise<ArrayBuffer> {
        const response = await fetch(uri);
        if (!response.ok) {
            return new ArrayBuffer(0);
        } else {
            return response.arrayBuffer();
        }

    }
}