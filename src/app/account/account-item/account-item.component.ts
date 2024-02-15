import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrl: './account-item.component.css',
})
export class AccountItemComponent {
  @Input()
  oneAccount!: { status: any; name: any };

  changeStatus(newStatus: any) {
    this.oneAccount.status = newStatus;
  }
}
