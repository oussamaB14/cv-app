import { Component, Input } from '@angular/core';
import { Candidat } from '../models/condidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() selCand: Candidat | undefined;
}
