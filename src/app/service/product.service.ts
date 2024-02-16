import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({providedIn: 'root'})
export class ProductService {
    private apiURL!:string;
    
    constructor(private http:HttpClient) { 
        this.apiURL = environment.apiUrl;
    }
    
    getProducts():Observable<Product[]>{
        const url = `${this.apiURL}/${environment.apiEndpoints.category}/`;
        return this.getArray<Product>(url);
    }

    getProduct(id:string):Observable<Product>{
        const url = `${this.apiURL}/${environment.apiEndpoints.product}/${parseInt(id)}/`;
        return this.get<Product>(url);
    }


    //generic get methods
    private get<T>(url:string, options?:any):Observable<T>{
        return this.http.get(url, options).pipe(
            map((res) => this.extractData<T>(res))
        ) as Observable<T>;
    }

    private getArray<T>(url:string, options?:any):Observable<T[]>{
        return this.http.get(url, options).pipe(
            map(response => this.extractData<T[]>(response)) 
        ) as Observable<T[]>
    }
    

    private extractData<T>(res:any){
        if (res && (res.status < 200 || res.status >= 300)) {
            throw new Error('Bad response status: ' + res.status)
        }
        return (res || {}) as T;
    }
}