import { Routes, RouterModule } from '@angular/router';
import { FuselajeComponent } from './components/fuselaje/fuselaje.component';
import { ControlComponent } from './components/control/control.component';
import { PlanetasComponent } from './components/planetas/planetas.component';

export const routes: Routes = [
    { path: '', component: FuselajeComponent },
    { path: 'inicio', component: FuselajeComponent },
    { path: 'control', component: ControlComponent },
    { path: 'planetas/:planeta', component: PlanetasComponent },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});