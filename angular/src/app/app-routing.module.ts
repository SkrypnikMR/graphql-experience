import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch:'full', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule)},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
