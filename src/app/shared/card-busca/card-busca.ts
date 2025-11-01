import { Component } from '@angular/core';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-card-busca',
  imports: [MatCardModule, MatCardActions, MatAnchor],
  templateUrl: './card-busca.html',
  styleUrl: './card-busca.scss',
})
export class CardBusca {

}
