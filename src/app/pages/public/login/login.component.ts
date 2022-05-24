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
      username:['',Validators.required],
      password:['',Validators.required]
    })
    this.loginSus = this.store.select('auth').subscribe((state) =>  {
      if(state.error){
        //
      }
      if(state.user) {
        console.log(state.user);
        this.router.navigate(['./pages/oficina-virtual']);
      }
    });
  }
  ngOnDestroy(): void {
    this.loginSus.unsubscribe();
  }

  login(){
    console.log(this.loginFrom.invalid);

    const {username,password} = this.loginFrom.value;
    this.store.dispatch(loginAction.login({username,password}));
   
  }
}
