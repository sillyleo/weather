import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="col-xs-8 offset-xs-2">
                <weather-widget></weather-widget>
            </div>
        </div>
    `,
    styles: [`
        .container { padding-top: 2rem; }
    `]
})

export class AppComponent {}