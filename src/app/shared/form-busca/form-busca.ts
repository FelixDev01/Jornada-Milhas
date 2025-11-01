import { Component } from '@angular/core';
import { Card } from "../card/card";
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatIcon } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-form-busca',
  imports: [Card, MatButtonToggle, MatButtonToggleGroup, MatIcon, MatChipsModule],
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {

}
