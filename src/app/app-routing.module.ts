import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component:HomePage
  },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'asignar-tarea',
    loadChildren: () => import('./pages/asignar-tarea/asignar-tarea.module').then( m => m.AsignarTareaPageModule)
  },
  {
    path: 'ver-tarea-asignada',
    loadChildren: () => import('./pages/ver-tarea-asignada/ver-tarea-asignada.module').then( m => m.VerTareaAsignadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
