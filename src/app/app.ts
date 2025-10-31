import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from "./shared/banner/banner";
import { Header } from "./shared/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
