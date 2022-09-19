import { BoxObject } from "./BoxObject.js";
export declare class Box {
    _name: string;
    _objs: BoxObject[];
    constructor(name: string);
    addObject(obj: BoxObject): void;
    getFile(uri: string): Promise<ArrayBuffer>;
}
