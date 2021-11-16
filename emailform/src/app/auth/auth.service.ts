import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      'https://api.angular-email.com/auth/username',
      {
        username
      }
    );
  }

  signup(credentials: any) {
    return this.http.post<any>(
      'https://api.angular-email.com/auth/signup',
      credentials
    );
  }
}
