import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIcon} from "@angular/material/icon";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent} from "@angular/material/card";


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
  inputText:string="";
  onClick() {

  }
}
