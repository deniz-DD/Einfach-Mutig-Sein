import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quote_text= "Hallo ich bin der Quote_Text";

  cardStyle: {[key:string]: string} ={
    'background-color': 'none', 
    'height': 'auto',
    'width': '18rem'
  }

  // buttonCo: {[key:string]: string}={
  //   'background-color': 'blue',
  //   'height': '10rem '
  // };

  // red(){
  //   if(this.buttonCo['background-color'] === 'blue'){
  //     this.buttonCo['background-color'] = 'red';
  // }else{
  //   this.buttonCo['background-color'] = 'blue'
  // }
    
    
  // }
  ReSize(){
    if(this.cardStyle['width'] === '18rem'){
      this.cardStyle['height'] = '100%';
      this.cardStyle['width'] = '100%';
      
    }else{
      
    }

  }


}
