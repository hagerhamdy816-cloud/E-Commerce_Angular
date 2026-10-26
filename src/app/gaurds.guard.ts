import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './data.service';
// import { Router } from 'express';

export const gaurdsGuard: CanActivateFn = (route, state) => {

  let dataServicesService=inject(DataService)
  let router=inject(Router)
  let isLogin;
  dataServicesService.isLogin.subscribe((data)=>{
    isLogin=data;
  })
  if (isLogin==false){
    router.navigate(['/login'])
  }
  return true;
};
