import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../spotify-service/spotify.service';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.component.html',
  styleUrls: ['./mood-input.component.css']
})
export class MoodInputComponent {

  moodInputForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private spotifyService: SpotifyService
  ) {
    this.moodInputForm = this.formBuilder.group({
      moodText: [''],
    })
  }

  handleMood() {
    console.log(this.moodInputForm.controls['moodText'].value);
    this.moodInputForm.controls['moodText'].setValue('');
    this.spotifyService.getToken().subscribe((data) => {
      console.log(data);
    })
  }
}
