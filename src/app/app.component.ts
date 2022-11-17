import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fechas } from './interfaces/fechas';
import { PlayaI } from './interfaces/playa-i';
import { Tarifas } from './interfaces/tarifas';
import { DatabaseFirebaseService } from './servicios/database-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-crud';

  constructor(private fb: FormBuilder, private dbFirebase: DatabaseFirebaseService) {
    
    }

  ngOnInit(): void {
   
  }


}
