import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
})
export class MiniWordComponent {
  textColor: string = '';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

  textStyle: any = {};
  applyStyle() {
    this.textStyle = {
      color: this.textColor,
      'font-size.px': this.fontSize,
      'font-family': this.fontFamily,
    };
  }
}
