import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent} from "@angular/material/card";
import {AliApiService} from "../service/ali-api.service";
import {MatMiniFabButton} from "@angular/material/button";


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatGridList, MatGridTile, MatCardContent, MatCard, MatMiniFabButton
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private ali: AliApiService) {
  }
  inputValue:string="";

  onEnter($event:any) {
    this.ali.generateContent(this.inputValue).subscribe(
      result => {
        console.log(result);
      }
    );
    console.log(JSON.stringify(this.inputValue));
  }

  onButtonClick() {
    this.ali.generateContent(this.inputValue).subscribe(
      result => {
        console.log(result);
      }
    );
    console.log(JSON.stringify(this.inputValue));
  }
}
