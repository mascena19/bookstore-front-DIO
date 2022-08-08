import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";

@Injectable()

export class BookService{
    private url = 'https://bling.com.br/Api/v2/produtos/json/&apikey=39b6269a3745daf723d34aeb9694e5d6047dcede3ae4e9e037a5918b48fe61f8c0c1aeed'

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/jason'})
    }


    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }

}