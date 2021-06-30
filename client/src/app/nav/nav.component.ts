import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(public accountService: AccountService,
    private router: Router, private toastr: ToastrService) { }// to access the accountService in template we have to make it public
  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model)
      .subscribe(response => {
        // console.log(response);
        this.router.navigateByUrl('/members');
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => { console.log(error); })
  // }
}
