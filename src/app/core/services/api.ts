import { computed, Injectable, signal } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import filmsData from './../data/films-data.json';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly _films = signal<Film[]>(filmsData);

  readonly films = this._films.asReadonly();

  getById(id: number) {
    return this._films().find((item: Film) => item.id === id);
  }

  toggleFavorite(id: number) {
    this._films.update((films) =>
      films.map((item: Film) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item,
      ),
    );
  }

  readonly getFavoriteFilms = computed(() => this._films().filter((item) => item.isFavorite));
}
