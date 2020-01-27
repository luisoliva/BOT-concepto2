import {LoginService} from './login.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate{
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.loginService.isUserLogin()){
      console.log('esta logeado');
      return true;
    }else{
      this.router.navigate(['login']);
      console.log('no esta logeado');
      return false;
    }
  }
}
