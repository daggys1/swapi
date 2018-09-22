  import{NgModule}from'@angular/core';
  import {Routes, RouterModule}from '@angular/router';

  import { AppComponent } from './app.component';
  import { PeopleComponent } from './people/people.component';
  import { PlanetsComponent } from './planets/planets.component';
  import { FilmsComponent } from './films/films.component';
  import { SpeciesComponent } from './species/species.component';
  import { VehiclesComponent } from './vehicles/vehicles.component';
  import { StarShipsComponent } from './star-ships/star-ships.component';

  const routes: Routes = [

  {
  path: 'people',
  component: PeopleComponent
  },
  {
  path: 'planets',
  component: PlanetsComponent
  },{
  path: 'films',
  component: FilmsComponent
  },
  {
  path: 'species',
  component: SpeciesComponent
  },{
  path: 'vehicles',
  component: VehiclesComponent
  },
  {
  path: 'starships',
  component: StarShipsComponent
  }];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
