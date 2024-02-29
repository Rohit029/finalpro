import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private name$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  private userId$ = new BehaviorSubject<string>("");
  private LoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor() { }



  public getRoleFromStore() { return this.role$.asObservable(); }

  public setRoleForStore(role : string) { this.role$.next(role); }

  public getNameFromStore() { return this.name$.asObservable(); }

  public setNameForStore(name : string) { this.name$.next(name); }

  public getLoggedIn() {return this.LoggedIn$.asObservable();}

  public setLoggedIn(login : boolean) { this.LoggedIn$.next(login);}

 // User Id
  public getUserIdFromStore() { return this.userId$.asObservable(); }

  public setUserIdForStore(userId : string) { this.userId$.next(userId); }


  
}
