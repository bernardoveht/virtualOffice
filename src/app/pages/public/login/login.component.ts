import { state } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import * as loginAction from 'src/app/store/actions/auth/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit,OnDestroy  {

  private loginSus! :Subscription;
  public loginFrom!: FormGroup;
  

  constructor(
    private readonly router: Router,
    private readonly store:Store<AppState>,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginSus = this.store.select('auth').subscribe((state) =>  {
      
      console.log(state);
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  login(){
    console.log(this.loginFrom.invalid);
    this.store.dispatch(loginAction.login({username:'20278789773',password:'Cocostest2022'}));
    // this.router.navigate(['./pages/oficina-virtual']);
  }
}
