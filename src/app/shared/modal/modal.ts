import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {

}
