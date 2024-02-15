import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  tabAccounts = [
    { name: 'oussama', status: 'active' },
    { name: 'yasmine', status: 'unknown' },
  ];
  addNewAccount(newAcc: { name: string; status: string; }) {
    this.tabAccounts.push(newAcc);
}}
