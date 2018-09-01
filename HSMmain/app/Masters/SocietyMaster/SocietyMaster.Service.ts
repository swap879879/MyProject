import { Component,Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class SocietyMasterService {
    constructor(private _http: Http) { }
}