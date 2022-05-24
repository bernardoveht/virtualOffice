import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { getUserName } from 'src/app/store/selectors/auth/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(getUserName)).subscribe(userName => {
      if (userName) {
        this.userName = userName;
      }
    })
  }

}
