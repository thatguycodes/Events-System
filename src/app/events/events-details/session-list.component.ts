import { AuthService } from './../../user/auth.service';
import { ISession } from './../shared/event.model';
import { Component, Input, OnChanges } from '@angular/core';
import { VoterService } from '../shared/voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];
  constructor(public auth: AuthService, private voterService: VoterService) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(this.sortAscByName)
        : this.visibleSessions.sort(this.sortDesByVotes);
    }
  }
  filterSessions(filter: string): void {
    if (filter === 'all') {
      this.visibleSessions = [...this.sessions];
    } else {
      this.visibleSessions = this.sessions.filter(
        (session) => session.level.toLowerCase() === filter
      );
    }
  }
  sortAscByName(s1: ISession, s2: ISession): 1 | 0 | -1 {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }
  sortDesByVotes(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(this.sortDesByVotes);
    }
  }
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}
