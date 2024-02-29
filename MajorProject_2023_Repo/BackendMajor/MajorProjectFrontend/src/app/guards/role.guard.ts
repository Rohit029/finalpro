import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService)
  const router = inject(Router)
  const toastr = inject(ToastrService)
  if(authService.decodeToken().role =="admin"){return true}
  else{ toastr.error("Not Authorized");  router.navigate(["/home"]); return false; } 
};
