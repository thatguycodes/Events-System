import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-simple-modal',
    template: `
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <ng-content></ng-content>
      </div>
    </div>
  </div>
    `,
    styles: [`
    .modal-body { height: 250px; overflow-y: scroll;}
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    constructor() { }
}
