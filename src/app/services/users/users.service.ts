import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  private link: string = environment.link + 'users/';
  private token: any = this.auth.getToken();
  private subjectSource = new Subject<void>();
  public countdown$ = this.subjectSource.asObservable();

  headers = new HttpHeaders(
    {
      'Authorization': `Bearer ${this.token.replaceAll('"', '')}`,
    })

  get refreshUser$() {
    return this.subjectSource;
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.link}?page=1&limit=100`, { headers: this.headers })
  }
  postUser(body: object): Observable<any> {
    return this.http.post(this.link, body, { headers: this.headers })
      .pipe(
        tap(() => {
          this.refreshUser$.next();
        })
      )
  }

  updateUser(body: object, uid: string) {
    return this.http.put(this.link + uid, body, { headers: this.headers })
      .pipe(
        tap(() => {
          this.refreshUser$.next();
        })
      )
  }

  deleteUser(uid: string): Observable<any> {
    return this.http.delete(this.link + uid, { headers: this.headers })
      .pipe(
        tap(() => {
          this.refreshUser$.next();
        })
      )
  }
}
