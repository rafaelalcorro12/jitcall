import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      take(1),
      map(user => !!user), // Si hay un usuario, devuelve true (autenticado)
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login']); // Redirige al login si no está autenticado
        }
      })
    );
  }
}
