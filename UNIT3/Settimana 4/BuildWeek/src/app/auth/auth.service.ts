import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signin } from '../models/signin';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiURL = environment.apiURL;
    jwtHelper = new JwtHelperService();

    private authSub = new BehaviorSubject<Login | null>(null);
    user$ = this.authSub.asObservable();
    timeOut: any;

    constructor(private http: HttpClient, private router: Router) { }

    login(data: { email: string; password: string; color: string}) {
        return this.http.post<Login>(`${this.apiURL}login`, data).pipe(
            tap((data) => {
                console.log('Login data: ', data);
            }),
            tap((data) => {
                this.authSub.next(data);
                localStorage.setItem('user', JSON.stringify(data));
                this.autoLogout(data);
            }),
            catchError(this.errors)
        );
    }

    updateColor(userId: number, color: string) {
        const updateData = {color};
        return this.http.patch<any>(`${this.apiURL}users/${userId}`, updateData).pipe(
            tap(()=> {
                console.log('colore aggiornato');
                console.log(color)
            }),catchError(this.errors));
    }

    signup(data: Signin) {
        return this.http
            .post(`${this.apiURL}register`, data)
            .pipe(catchError(this.errors));
    }

    logout() {
        this.authSub.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    restore() {
        const userJson = localStorage.getItem('user');
        if (!userJson) {
            return;
        }
        const user: Login = JSON.parse(userJson);
        this.authSub.next(user);
        this.autoLogout(user);
    }

    autoLogout(user: Login) {
        const dateExpiration = this.jwtHelper.getTokenExpirationDate(user.accessToken) as Date;
        const millisecondsExp = dateExpiration.getTime() - new Date().getTime();
        this.timeOut = setTimeout(() => {
            this.logout();
        }, millisecondsExp);
    }

    getAllUsers(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiURL}users`).pipe(
            catchError(this.errors)
        );
    }
    

    private errors(err: any) {
        console.log(err.error);
        switch (err.error) {
            case 'Email already exists':
                alert('Utente già registrato')
                return throwError('utente già registrato');
                break;

            case 'Incorrect password':
                alert('Password Errata')
                return throwError('password errata');
                break;

            case 'Cannot find user':
                alert('Utente non trovato')
                return throwError('Utente non trovato');
                break;

            default:
                return throwError('Errore nella chiamata');
                break;
        }
    }
}

