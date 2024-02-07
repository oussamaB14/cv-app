import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/condidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidat: Candidat | undefined;
  @Output() candToListe = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.candToListe.emit(this.oneCandidat);
  }
}
