import { observable } from 'rxjs/symbol/observable';
import { Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class FindPetsService {
    private searchUrl: string;
    constructor(private _jsonp: Jsonp) {
    }
    //consume the api for fetching the pets and owners.
    findPets():Observable<any> {
        this.searchUrl = "http://agl-developer-test.azurewebsites.net/people.json?callback=JSONP_CALLBACK";
        return this._jsonp.get(this.searchUrl)
            .map(res => res.json());
    }
}