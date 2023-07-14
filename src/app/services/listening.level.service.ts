import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ListeningLevel } from "../models/ListeningLevel";

@Injectable({
    providedIn: 'root'
})
export class ListeningLevelService {
    private basePath = "";
    constructor(private http: HttpClient) {
        this.basePath = environment.serverBasePath;
    }

    getchListeningLevelByUserId(userId: String): Observable<ListeningLevel[]> {
        return this.http.get<ListeningLevel[]>(`${this.basePath}/listen/${userId}`).pipe(map((response: any) => {
            return response.data;
          }));
    }

    saveListeningLevel(listeningLevel: ListeningLevel): Observable<ListeningLevel> {
        return this.http.post<ListeningLevel>(`${this.basePath}/listen`, listeningLevel).pipe(map((response: any) => {
            return response.data;
          }));
    }
    deleteListeningLevelByListeningId(listeningId: number) {
        return this.http.delete<ListeningLevel>(`${this.basePath}/listen/${listeningId}`).pipe(map((response: any) => {
            return response.data;
          }));
    }
}