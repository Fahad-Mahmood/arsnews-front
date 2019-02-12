import { Injectable } from '@angular/core';
import { News } from './news';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
const ihttpOptions = {
  headers: new HttpHeaders({ 'content-type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private  newsUrl = 'http://localhost:3000/api/news';  // URL to web 
  constructor( private http: HttpClient ) { }

  /** GET news from the server */
getNews (): Observable<News[]> {
  return this.http.get<News[]>(this.newsUrl)
  .pipe( 
    catchError(this.handleError('getNews', []))
  );
}

GetNewsDetail(id:String): Observable<News> {
   var url = `${this.newsUrl}/${id}`;
   return this.http.get<News>(url)
   .pipe(
    catchError(this.handleError<News>(`getHero id=${id}`))
  );
}

/** DELETE: delete the hero from the server */
deleteNews (id: string): Observable<any> {
  const url = `${this.newsUrl}/${id}`;

  return this.http.delete<any>(url, httpOptions).pipe(
    catchError(this.handleError<any>('deleteNews'))
  );
}

/** POST: add a new hero to the server */
addNews(news): Observable<any> {
  return this.http.post<any>(this.newsUrl, news).pipe(
    catchError(this.handleError<any>('addNews'))
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
