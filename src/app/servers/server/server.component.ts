import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  @Input() oneServer!: { name: any; type: any; date: any; statut: any };
  bgColor: any;
}
