import { Component } from '@angular/core';
import { Candidat } from '../models/condidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'Bart', 'Alex', 23, 'Ingénieur', 'team-1.jpg'),
    new Candidat(2, 'Homer', 'Sephan', 55, 'Directeur', 'team-3.jpg'),
    new Candidat(3, 'Lisa', 'Rodrigues', 20, 'Designer', 'team-2.jpg'),
  ];
  selectedCandidat: Candidat | undefined ;
  recupererCandidat(cand: Candidat | undefined) {
    this.selectedCandidat = cand;
  }

}
