import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { Container } from '../../shared/container/container';
import { CardBusca } from "../../shared/card-busca/card-busca";

@Component({
  selector: 'app-home',
  imports: [Banner, Container, CardBusca],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
