import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-rodape',
  imports: [],
  templateUrl: './banner-rodape.html',
  styleUrl: './banner-rodape.scss',
})
export class BannerRodape {
  @Input() src: string =''
  @Input() alt: string =''

}
