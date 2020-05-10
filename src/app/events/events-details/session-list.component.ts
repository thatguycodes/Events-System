import { ISession } from "./../shared/event.model";
import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-session-list",
  templateUrl: "./session-list.component.html",
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filter: string): void {
    if (filter === 'all') {
      this.visibleSessions = [...this.sessions];
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === filter);
    }
  }
}
