import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-depoimento.html',
  styleUrls:['./card-depoimento.scss'],
})
export class CardDepoimento {
  depoimento: string =
  `Recomendo fortemente a agência de viagens Jornada.
  Eles oferecem um serviço personalizado e de alta qualidade
  que excedeu minhas expectativas em minha última viagem.`
  autoria: string = 'Mariana Santos'
}
