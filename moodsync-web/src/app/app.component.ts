import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MoodSyncPlaylist';
  moodSyncPlaylistForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.moodSyncPlaylistForm = this.formBuilder.group({
      moodText: [''],
    });
  }

  


}
