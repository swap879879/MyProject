import { Component, Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import { map } from 'rxjs/operators';


@Injectable()

export class SocietyMasterService {

    apipath = "http://localhost/";
    oldPathMain = "http://localhost:21613";
    constructor(private _http: Http) { }

    GetTestData(): Observable<string> {
        return this._http.get(this.apipath + "Test/GetTest").pipe(map((response: Response) => <string>response.json()));
    }
}