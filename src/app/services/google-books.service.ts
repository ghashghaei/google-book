import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private apiUrl = `${environment.googleBooksApiUrl}`;

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any[]> {
    const url = `${this.apiUrl}${query}`;  
    return this.http.get<any>(url);
  }

 
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`API request failed: ${error.message}`);
    return throwError(() => new Error('Something went wrong with the API request.'));
  }
}
