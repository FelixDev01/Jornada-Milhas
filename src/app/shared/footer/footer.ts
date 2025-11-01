import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from "@angular/material/icon";
import { Container } from "../container/container";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-footer',
  imports: [MatToolbar, MatIcon, Container, MatButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
