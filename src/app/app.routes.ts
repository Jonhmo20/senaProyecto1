import { Routes } from '@angular/router';
import { AppHelp } from '../components/navbar/navbar.component';
import { AppFormulario } from '../components/formulario/formulario.component';

export const routes: Routes = [
    {
        path: '',
        component: AppFormulario
    },
    {
        path: "home",
        component: AppHelp
    }
];
