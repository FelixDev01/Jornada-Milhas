import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { Container } from '../../shared/container/container';
import { CardBusca } from "../../shared/card-busca/card-busca";
import { CardDepoimento } from '../../shared/card-depoimento/card-depoimento';
import { FormBusca } from "../../shared/form-busca/form-busca";
import { BannerRodape } from "../../shared/banner-rodape/banner-rodape";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Banner, Container, CardBusca, CardDepoimento, FormBusca, BannerRodape],
  templateUrl: './home.html',
  styleUrls:['./home.scss'],
})
export class Home {

}
