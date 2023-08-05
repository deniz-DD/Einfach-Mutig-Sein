import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

   isBurgerMenuClick =  false;

   test(){
    if(this.isBurgerMenuClick === false){
      this.isBurgerMenuClick= true;
    }else{
      this.isBurgerMenuClick = false;
    }

   }
   CollpaseFalse(){
    this.isBurgerMenuClick = false;
    
    
   }

  



}
