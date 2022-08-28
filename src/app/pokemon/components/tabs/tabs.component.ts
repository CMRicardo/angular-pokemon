import { Component } from '@angular/core';

type Tabs = 'tab-pokemons' | 'tab-favorites'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  public currentTab: Tabs = 'tab-pokemons'
}
