import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { BananaComponent } from './components/banana/banana.component';

const routes: Routes = [
  { path: '', component: TestComponent},
  { path: 'banana', component: BananaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
