import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/condidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() tabCands: Candidat[] = [];
  @Output() candToCv = new EventEmitter();
cand: Candidat | undefined;

  sendCandToCv(cand: Candidat) {
    this.candToCv.emit(cand);
  }
}
