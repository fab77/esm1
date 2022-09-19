import { BoxObject } from "./BoxObject.js";
// import fetch from "node-fetch";
// import { fetch } from "cross-fetch";

export class Box {

    _name: string;
    _objs: BoxObject[];

    constructor(name: string) {
        this._name = name;
        this._objs = [];
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
        // if (typeof window !== "undefined") {
        //     return this.getFileBrowser(uri);

        // } else {
        //     return this.getFileNode(uri);
        // }

    }

    // async getFileNode(uri: string): Promise<ArrayBuffer> {
    //     const response = await fetch(uri, {
    //         method: "GET",
    //         headers: {
    //           "Accept": "*",
    //           "Content-Type": "image/fits",
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"
    //         },
    //       });
    //     if (!response.ok) {
    //         return new ArrayBuffer(0);
    //     }
    //     return response.arrayBuffer();
    // }

    // async getFileBrowser(uri: string): Promise<ArrayBuffer> {
    //     const response = await window.fetch(uri);
    //     if (!response.ok) {
    //         return new ArrayBuffer(0);
    //     }
    //     return response.arrayBuffer();
    // }


}