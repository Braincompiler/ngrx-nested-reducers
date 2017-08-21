import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { Observable } from 'rxjs/Observable'

import { IState } from './reducers'

@Component({
  selector: 'app-root',
  template: `
    <h1>NGRX - Nestes reducer PoC</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  private _appState: Store<IState>

  public constructor(private store: Store<IState>) {
    this._appState = this.store.select(s => s)
  }

  public ngOnInit(): void {
    this._appState.subscribe(s => {
      console.log(s)
    })
  }
}
