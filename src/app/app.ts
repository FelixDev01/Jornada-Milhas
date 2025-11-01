import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from "./shared/banner/banner";
import { HeaderComponent } from "./shared/header/header";
import { Container } from './shared/container/container';
import { Footer } from "./shared/footer/footer";
import { Card } from './shared/card/card';
import { MatCardModule } from '@angular/material/card';
import { CardDepoimento } from "./shared/card-depoimento/card-depoimento";
import { Home } from './pages/home/home';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, Container, Footer, Card, MatCardModule, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
