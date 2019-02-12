import { Injectable } from '@angular/core';
import { News } from '../news';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private  newsUrl = 'http://localhost:3000/api/news';  // URL to web 
  
  constructor( private http: HttpClient ) { }

    /** GET news from the server */
getNews (): Observable<News[]> {
  return this.http.get<News[]>(this.newsUrl)
  .pipe( 
    catchError(this.handleError('getNews', []))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };


}
  

}
