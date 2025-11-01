import { Component } from '@angular/core';
import { Banner } from '../../shared/banner/banner';
import { Container } from '../../shared/container/container';

@Component({
  selector: 'app-home',
  imports: [Banner, Container],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
