import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userPayload : any;
  private baseURL : string ="https://localhost:7243/api/Access/";

  constructor(private http : HttpClient) { this.userPayload = this.decodeToken() }
  userId:number=0;
  newToken:any=localStorage.getItem('token');
  signup(personObj : any) { return this.http.post<any>(`${this.baseURL}signup`,personObj)}

  signin(personObj : any) { return this.http.post<any>(`${this.baseURL}signin`,personObj)}

  signout() { localStorage.clear(); }

  setToken(jwttoken : string) { localStorage.setItem('token',jwttoken) }

  getToken() { return localStorage.getItem('token') }

  isLoggedIn() { return !!localStorage.getItem('token')} 

  decodeToken() { return new JwtHelperService().decodeToken(this.getToken()!) }

  getNameFromToken()  { if(this.userPayload) return this.userPayload.unique_name}

  getRoleFromToken() { if(this.userPayload) return this.userPayload.role }

  getUserIdFromToken() { if(this.userPayload) return this.userPayload.userId }
 

  helper= new JwtHelperService();

  getUserInfo(){
   
  this.userId=this.userPayload.UserId;
  }
}


