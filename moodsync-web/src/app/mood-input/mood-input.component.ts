import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../spotify-service/spotify.service';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.component.html',
  styleUrls: ['./mood-input.component.css']
})
export class MoodInputComponent {

  ngOnInit() {
    this.getSpotifyPlaylistCategories();
  }

  moodInputForm: FormGroup;
  moodOptions: any[] = [];
  playlistOptions: any[] = [];
  playlistLink: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private spotifyService: SpotifyService
  ) {
    this.moodInputForm = this.formBuilder.group({
      moodText: [''],
      selectedMood: ['']
    })
  }

  handleMood() {
    console.log(this.moodInputForm.controls['moodText'].value);
    this.moodInputForm.controls['moodText'].setValue('');
    this.spotifyService.getPlaylistFromCategory(this.moodInputForm.controls['selectedMood'].value.id).subscribe(data => {
      this.playlistOptions = [];
      for (let playlist of data.playlists.items) {
        this.playlistOptions.push(playlist.external_urls.spotify);
      }
      const randomIndex = Math.floor(Math.random() * this.playlistOptions.length);
      this.playlistLink = this.playlistOptions[randomIndex];
    })
  }

  getSpotifyPlaylistCategories() {
    this.spotifyService.browsePlaylists("50", "").subscribe(data => {
      this.moodOptions = [];
      for (let item of data.categories.items) {
        let option = { label: item.name, value: item }
        this.moodOptions.push(option);
      }
    });
    
  }
}
