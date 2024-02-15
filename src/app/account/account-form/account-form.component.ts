import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css',
})
export class AccountFormComponent {
  Name: string = '';
  tabOptions: string[] = ['', 'Active', 'Inactive', 'unknown'];
  // name: string = '';
  // status: string = '';
  @Output() AccToHome = new EventEmitter();
  sendNewAccountToHome(inp: any, sel: any) {
     console.log(inp, sel);
    this.AccToHome.emit({
      name: inp,
      statut: sel,
    });
  }
}
