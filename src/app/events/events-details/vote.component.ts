import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote',
  styleUrls: ['./vote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
})
export class VoteComponent {
  @Input() voted: boolean;
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
