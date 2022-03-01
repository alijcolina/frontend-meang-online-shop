import { TYPE_ALERT } from './../../../../@shared/alerts/values.config';
import { basicAlert } from '@shared/alerts/toasts';
import { IRegisterForm, IResultRegister } from '@core/interfaces/register.interface';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '@core/services/users.service';
import { Router } from '@angular/router';
import { EMAIL_PATTERN } from '@core/constans/regex';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailPattern = EMAIL_PATTERN;
  register: IRegisterForm = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    birthday: '',
  };
  constructor(private api: UsersService, private router: Router) { }

  ngOnInit(): void {
    const data = new Date();
    data.setFullYear(data.getFullYear() - 18);
    this.register.birthday = (data.toDateString()).substring(0, 10);
    console.log(this.register);
  }
  private formaNumbers(num: number | string ) {
    return (+num < 10) ? `0${num}` : num;
  }

  dataAsign($event) {
    console.log('register cogiendo dato, $event');
    const fecha = `${$event.year}-${this.formaNumbers($event.month)}-${this.formaNumbers($event.day)}`;
    this.register.birthday = fecha;
  }

  add() {
    console.log('Enviando datos', this.register);
    this.api.register(this.register).subscribe((result: IResultRegister) => {
      console.log('Result', result);
      if (!result.status) {
        basicAlert(TYPE_ALERT.WARNING, result.message);
        return;
      }
      basicAlert(TYPE_ALERT.SUCCESS, result.message);
      this.router.navigate(['/login']);
    });
  }
}
