import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog {
  public api = inject(Api);

  searchQuery = signal('');
  showFavs = signal(false);

  filteredFilms = computed(() => {
    const normalizedQuery = this.searchQuery().trim().toLowerCase();
    let films = this.api.films();

    if (this.showFavs()) {
      films = films.filter((film) => film.isFavorite);
    }

    if (normalizedQuery) {
      films = films.filter((film) => film.title.toLowerCase().includes(normalizedQuery));
    }

    return films;
  });

  onSearch(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  toggleFavFilter() {
    this.showFavs.update((value) => !value);
  }

  toggleFav(event: MouseEvent, id: number) {
    event.stopPropagation();
    this.api.toggleFavorite(id);
  }
}
