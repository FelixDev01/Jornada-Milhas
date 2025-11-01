import { Component } from '@angular/core';
import { Card } from "../card/card";
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatIcon } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-form-busca',
  imports: [Card, MatButtonToggle, MatButtonToggleGroup, MatIcon, MatChipsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './form-busca.html',
  styleUrl: './form-busca.scss',
})
export class FormBusca {

}
