import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent} from "@angular/material/card";
import {AliApiService} from "../service/ali-api.service";


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatIcon, MatGridList, MatGridTile, MatCardContent, MatCard
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  constructor(private ali: AliApiService) {
  }
  inputText:string="";
  onClick() {
    this.ali.generateContent().subscribe(

      result => {

        console.log(result);
      }

  );
    console.log(JSON.stringify(this.inputText));
  }
}
