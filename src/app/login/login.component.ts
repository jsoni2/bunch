import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {

  };

  len: boolean = false;
  letter: boolean = false;
  capital: boolean = false;
  number: boolean = false;
  symbol: boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  onKey(event: any) {
    console.clear();
    console.log(this.user.name);

    // CHECK IF INPUT IS NOT BLANK
    if (this.user.name.length > 0) {

      // CHECK LENGTH
      if (this.user.name.length >= 8) {
          console.log('lenth is good');
          this.len = true;
      } else{
        console.log('lenth should be at least 8');
        this.len = false;
      }

      // CHECK FOR LETTER
      if (this.user.name.match(/[A-z]/)) {
          console.log('have at least one letter');
          this.letter = true;
      } else{
        console.log('no letter found');
        this.letter = false;
      }

      // CHECK FOR CAPITAL LETTER
      if (this.user.name.match(/[A-Z]/)) {
          console.log('have at least one capital letter');
          this.capital = true;
      } else{
        console.log('need at least one capital letter');
        this.capital = false;
      }

      // CHECK FOR NUMBER
      if (this.user.name.match(/\d/)) {
          console.log('have at least one number');
          this.number = true;
      } else{
        console.log('need at least one number');
        this.number = false;
      }

      // CHECK FOR SYMBOL
      if (this.user.name.match(/[^a-zA-Z0-9\-\/]/)) {
          console.log('have atleast one symbol');
          this.symbol = true;
      } else{
        this.symbol = false;
      }

    } else{
      this.len = false;
      this.letter = false;
      this.capital = false;
      this.number = false;
      this.symbol = false;
    }
  }
}
