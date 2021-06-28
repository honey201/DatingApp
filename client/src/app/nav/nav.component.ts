import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //currentUser$:Observable<User|null> = this.accountService.currentUser$;
  // use loggedIn!:boolean means it will not force you to initialize 
  // but you are making sure and taking the reponsibility to be used properly
  //use loggedIn?:boolean means either boolean or undefined type
  constructor(public accountService: AccountService) { }// to access the accountService in template we have to make it public
  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        console.log(response);
      },
        error => { console.log(error) });
  }

  logout() {
    this.accountService.logout();
  }
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => { console.log(error); })
  // }
}
