import { Component, OnInit } from '@angular/core';
import { FacebookService,LoginResponse,LoginOptions, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FacebookService) { 

    let initParams: InitParams = {
      appId: '395378530875460',
      xfbml: true,
      version: 'v2.11'
    };
 
    fb.init(initParams);
  }

  ngOnInit() {


  }

  loginWithFacebook(): void {
    
       this.fb.login()
         .then((response: LoginResponse) => {
           console.log(response);
           this.facebookShowData();
         })
         .catch((error: any) => console.error(error));
    
     }

     facebookShowData() {
       this.fb.api('/me?fields=id,name,email')
       .then(res => console.log(res))
       .catch(e => console.log(e));
     }

}
