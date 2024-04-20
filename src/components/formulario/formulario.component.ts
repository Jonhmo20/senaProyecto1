import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/apiData';
import { Observable } from 'rxjs';


// las configuraciones
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'

})


// la logica
export class AppFormulario {

  constructor(private http: HttpClient) { }

  name: string = "";
  pass: string = "";
  url: string = "http://localhost:4000/api/users";
  responseData: User[] = []

  obtenerUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  handleData(): void {
    this.obtenerUsuarios().subscribe(
      response => {
        this.responseData = response;
        console.log(this.responseData); 
        const userExists = this.responseData.some(element => element.email === this.name);
        if (userExists) {
          console.log('El usuario existe');
          // Realizar las acciones correspondientes si el usuario existe
          const userPassword = this.responseData.some(ele => ele.password === this.pass)
          if (userPassword) {
            console.log("USUARIO Y CONTRASEÑA CORRECTAS A DORMIIIIIIR");
          }else{
            console.log("la contraseña es incorrecta, intenta nuevamnte");
            
          }
        } else {
          console.log('El usuario no existe');
          // Realizar las acciones correspondientes si el usuario no existe
        }
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
}
}
