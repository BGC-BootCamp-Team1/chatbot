import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {AliApiService} from "../service/ali-api.service";
import {MatMiniFabButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatGridList, MatGridTile, MatCardContent, MatCard, MatMiniFabButton, MatSelect, NgForOf, MatOption, MatCardHeader
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private ali: AliApiService) {
  }
  selectedKey:string="高情商"
  inputValue:string="";
  responseValue:string="";

  request(){
    this.ali.generateContent(this.inputValue,this.selectedKey).subscribe(
      result => {
        console.log(result);
        this.responseValue = result
      }
    );
    console.log(this.selectedKey)

  }

  onEnter() {
    this.request()
  }

  onButtonClick() {
    this.request()
  }
}
