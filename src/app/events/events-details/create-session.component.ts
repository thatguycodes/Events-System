import { Router } from '@angular/router';
import { EventService, restrictedWords } from './../shared/index';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './create-session.component.html',
  styles: [`
  em {float: right; color: #E05C65; padding-left: 10px;}
  .error input, .error select, .error textarea { background-color: #e3c3c5;}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error ::-ms-input-placeholder { color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
  saveSession(formValues: any) {
    this.eventService.saveSession(formValues);
    this.router.navigate(['events']);
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
