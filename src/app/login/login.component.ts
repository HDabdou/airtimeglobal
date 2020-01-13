import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginU:string;
  password:string;
  etape:number =0;
  smscode:number;
  loginstepone(){
    console.log(this.loginU +" "+this.password); 
    if(this.loginU == "HDabdoul" && this.password == "abdou1"){
      this.etape = 1;
    } else{
      console.log("Login ou password incorrect");
      
    }
  }
  loginsteptwo(){
    if(this.smscode == 123456){
      this.router.navigate(['/home']);
    }else{
      console.log('sms code incorrect ');
      
    }
  }
  constructor(private router:Router) { }

  ngOnInit() {}

}
