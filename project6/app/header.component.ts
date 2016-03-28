import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'header-component',
    template: `
    <nav class="navbar navbar-light bg-faded">
      <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar">
        &#9776;
      </button>
      <div class="collapse navbar-toggleable-xs" id="navbar">
          <a class="navbar-brand" href="#">ng2-filtering</a>
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" [routerLink]="['Catalog']">Catalog</a>
            </li>
          </ul>
      </div>
    </nav>
    `,
    directives: [RouterLink]
})

export class HeaderComponent {
}
