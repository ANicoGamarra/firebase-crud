import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fechas } from 'src/app/interfaces/fechas';
import { Tarifas } from 'src/app/interfaces/tarifas';
import { AuthService } from 'src/app/servicios/autentificacion/auth.service';
import { DatabaseFirebaseService } from 'src/app/servicios/database-firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'firebase-crud';
  editForm!:any;
  fechas: Fechas = {
    fechaDate: "Tue Oct 25 2022 17:09:31 GMT-0300 (hora estándar de Argentina)",
    fechaIngreso: "25-10-2022",
    horaIngreso: "14:24:23",
    fechaSalidaDate: "",
    fechaSalida: "",
    horaSalida: "",   
    estadia: 0,         
  };

  tarifa: Tarifas = {
    id: 3,
    nombre: "auto-basico",               // nombre de la tarifa 
    categoria: "auto",            // tipo de vehiculo
    fraccion: 30,             // fraccion minima de facturacion
    unidad_tiempo: "min",        // minutos, horas, dias, semanas, mes
    valor: 150,                
    tolerancia: 5,           // rango de tolerancia
  };

  playa!: any

  //playaCompleta$!:Observable<PlayaI[]>
  playaCompleta!:any

  constructor(private fb: FormBuilder, private dbFirebase: DatabaseFirebaseService, private authService: AuthService, private router: Router) {
     this.createForm();
    }

  ngOnInit(): void {
    this.dbFirebase.getAll().subscribe(data => {
      this.playaCompleta = data;
      console.log(this.playaCompleta);      
    })
    
    
  }


    createForm() {                                               
      this.editForm = this.fb.group({
        patente: [''],  
        descripcion: [''],          
      });   
    }

    guardarDatos(){
      this.playa = {
      patente : this.editForm.value.patente,
      descripcion : this.editForm.value.descripcion,
      fechas : this.fechas,
      tarifa : this.tarifa,
      saldo : 0,
      codigoBarras : "",
      }
      console.log(this.playa);
      this.dbFirebase.create(this.playa)
    }

    logout() {
      this.authService
        .logout()
        .then(() => this.router.navigate(['/']))
        .catch((e) => console.log(e.message));
    }
}
