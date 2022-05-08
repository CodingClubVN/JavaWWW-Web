import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrderService} from "../../../../../services/order/order.service";
import {IUserModel} from "../../../../../models/i-user-model";
import {UserService} from "../../../../../services/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit {
  userForm!: FormGroup;

  constructor( public dialogRef: MatDialogRef<EditUserModalComponent>,
               @Inject(MAT_DIALOG_DATA) public myUser: IUserModel,
               private userService: UserService) {
    this.userForm = this.initProductForm();
  }

  ngOnInit(): void {
    console.log(this.myUser);
  }
  initProductForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(this.myUser.firstName ? this.myUser.firstName : '', Validators.required),
      lastName: new FormControl(this.myUser.lastName ? this.myUser.lastName : '', Validators.required),
      telephone: new FormControl(this.myUser.telephone ? this.myUser.telephone : '', Validators.required),
      address: new FormControl(this.myUser.address ? this.myUser.address : '', Validators.required),
    })
  }

  updateUser() {
    this.userService.updateUser(this.userForm.getRawValue())
      .subscribe(
        res => {
          this.dialogRef.close(true)
        }
      )
  }
}
