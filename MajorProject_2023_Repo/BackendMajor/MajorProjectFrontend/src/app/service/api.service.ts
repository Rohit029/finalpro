import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../user-profile/personmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  persons : Person[] = [];

  private baseURL : string ="https://localhost:7243/api/People/";
  constructor(private http : HttpClient) { }

  getAllUser() { return this.http.get<any>(this.baseURL)}

  deleteUser(id : number) { return this.http.delete<any>(this.baseURL+id)}

  getUserById(id:number){
    return this.http.get<Person>('https://localhost:7243/api/People/' + id)
  }

  editUser(id: number, data: Person) {
    return this.http.put<Person>('https://localhost:7243/api/People/' + id, data);
  }

  clientApproved(id :number ,body:any)  { 
   return this.http.put<Person>('https://localhost:7243/api/People/approve/' + id,body) }
}
