import { Component } from '@angular/core';
import { AppHelp } from '../components/navbar/navbar.component'
import { AppFormulario } from '../components/formulario/formulario.component';
import { AppFooter } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHelp, AppFooter, AppFormulario, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  
}
