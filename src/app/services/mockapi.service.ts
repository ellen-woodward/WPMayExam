import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { staffMember } from '../interfaceStaff';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  private _siteURL = "https://6446a1c6ee791e1e2904ebdc.mockapi.io/staffDetails"

  constructor(private _http: HttpClient) { }

  getStaffDetails(): Observable<staffMember[]> {
    return this._http.get<staffMember[]>(this._siteURL)
      .pipe(
        tap(data => console.log('data/error' + JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => new Error("mockapi service:" + err.message))
  }
}
