import { AuthService } from "./auth.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: "./profile.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error ::-ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.auth.currentUser.firstName, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*"),
      ]),
      lastName: new FormControl(
        this.auth.currentUser.lastName,
        Validators.required
      ),
    });
  }
  cancel() {
    this.router.navigate(["events"]);
  }
  saveProfile(formValues: { firstName: string; lastName: string }) {
    if (this.profileForm.valid) {
      this.auth.updateProfile(formValues);
      this.toastr.success('Profile Saved Successfully', 'Profile');
    }
  }
  validateFirstName() {
    return (
      this.profileForm.controls.firstName.valid ||
      this.profileForm.controls.firstName.untouched
    );
  }
  validateLastName() {
    return (
      this.profileForm.controls.lastName.valid ||
      this.profileForm.controls.lastName.untouched
    );
  }
}
