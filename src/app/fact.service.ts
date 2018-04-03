import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Injectable, EventEmitter } from '@angular/core';

import { Fact } from './fact';

@Injectable()
export class FactService {
    private baseUrl = 'http://localhost:8080/api/facts';
    data: any = [];

    dataChanged = new EventEmitter<Fact[]>();

    constructor(private http: Http) {
    }

    getData() {
        return this.http.get(`${this.baseUrl}`)
            .map((response: Response) => response.json());
    }

    getFacts() {
        this.getData()
            .subscribe(data => {
                this.data = data;
                this.dataChanged.emit(this.data);
            });
        return this.data;
    }

    getFact(fact_id) {
        return this.http.get(`${this.baseUrl}/${fact_id}`)
            .map((response: Response) => response.json());
    }

    addFact(fact) {
        return this.http.post(`${this.baseUrl}`, fact);
    }

    deleteFact(fact_id) {
        console.log(fact_id);
        return this.http.delete(`${this.baseUrl}/${fact_id}`);
    }

}
