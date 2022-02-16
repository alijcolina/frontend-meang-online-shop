import { AuthService } from './../../../@core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private usersApi: UsersService, private auht: AuthService) { }

  ngOnInit(): void {
    /*this.auht.login('ali@gmail.com', '1234').subscribe(result => {
      console.log(result);
    });
    this.usersApi.getUsers().subscribe( result => {
      console.log(result);
    });
    this.auht.getMe().subscribe( result => {
      console.log(result);
    });*/
  }

}
