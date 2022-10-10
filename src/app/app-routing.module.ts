import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'personas',
    loadChildren: () => import('./personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'asignar-tarea',
    loadChildren: () => import('./asignar-tarea/asignar-tarea.module').then( m => m.AsignarTareaPageModule)
  },
  {
    path: 'ver-tarea-asignada',
    loadChildren: () => import('./ver-tarea-asignada/ver-tarea-asignada.module').then( m => m.VerTareaAsignadaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
