import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from "./core/layout/breadcrumbs/breadcrumbs";
import { Header } from "./core/layout/header/header";
import { Footer } from "./core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Breadcrumbs, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('film-collection-angular2026q2');
}
