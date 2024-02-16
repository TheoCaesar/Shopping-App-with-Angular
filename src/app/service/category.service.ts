// a-service
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Category } from '../models/category';

@Injectable({providedIn:'root'})   
export class CategoryService {
    private apiURL!:string;
    
    constructor(private http:HttpClient) { 
        this.apiURL = environment.apiUrl;
    }
    
    getCategories():Observable<Category[]>{
        const url = `${this.apiURL}/${environment.apiEndpoints.category}/`;
        return this.getArray<Category>(url);
    }

    getCategory(id:string):Observable<Category>{
        const url = `${this.apiURL}/${environment.apiEndpoints.category}/${parseInt(id)}/`;
        return this.get<Category>(url);
    }

    // generic methods for get and get array objs
    private get<T>(url: string, options?:any):Observable<T>{
        return this.http.get(url,options).pipe(
            map((res)=>this.extractData<T>(res))
        ) as Observable<T>;
    }

    private getArray<T>(url: string, options?:any):Observable<T[]>{
        return this.http.get(url,options).pipe(
            map(res=>this.extractData<T[]>(res))
        ) as Observable<T[]>;
    }

    //common methods for exception handling
    private extractData<T>(res:any){
        if (res && (res.status < 200 || res.status >= 300)) {
            throw new Error('Bad response status: ' + res.status)
        }
        return (res || {}) as T;
    }
}