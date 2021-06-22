import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Album } from "../models";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly BASE_URL = "https://api-frontend-test.brlogic.com/";

  constructor(private http: HttpClient) {}

  dataBase(): Observable<any> {
    return this.http.get(`${this.BASE_URL}podcast/details.json`);
  }

  episode(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}podcast/episodes/${id}/details.json`);
  }
}
