import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {IUserModel} from "../../../models/i-user-model";
import {MatDialog} from "@angular/material/dialog";
import {OderDetailComponent} from "../../../modules/admin-dashboard/components/oder-detail/oder-detail.component";
import {EditUserModalComponent} from "./component/edit-user-modal/edit-user-modal.component";
import {NotifyService} from "../../../services/notify/notify.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  myUser: IUserModel | undefined;

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.listenService();
  }

  listenService(): void {
    this.userService.getMe()
      .subscribe(res => {
          this.myUser = res;
          console.log(this.myUser);
        },
        error => {
          console.log(error);
        })
  }

  openModal(): void{
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '50%',
      data: this.myUser
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.listenService();
        this.notifyService.success('Cập nhật thông tin thành công');
      }else{
        this.notifyService.error('Cập nhật thông tin thất bại');
      }
    });
  }
}
