import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  styleUrl: './profile-card.scss',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  title = input.required<string>();
  subtitle = input.required<string>();
  job = input.required<string>();
  disponibility = input.required<string>();
  bio = input.required<string>();

  likes = signal(0);
  bioVisible = signal(false);

  incrementalLikes() {
    this.likes.update((value) => value + 1);
  }

  seeBio() {
    this.bioVisible.update((value) => !value);
  }
}
