import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from "./shared/banner/banner";
import { HeaderComponent } from "./shared/header/header";
import { Container } from './shared/container/container';
import { Footer } from "./shared/footer/footer";
import { Card } from './shared/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, HeaderComponent, Container, Footer, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
