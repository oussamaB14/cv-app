import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css',
})
export class DirectComponent {
  input: string = '';
  textSize: string = '14';
  bgColor: string = 'green';
  textColor: string = 'white';
  textFont: string = '';

  @ViewChild('sz', { static: true })
  newSize!: { nativeElement: { value: string } };

  ngOnInit() {
    console.log(this.newSize);
  }

  changeSize() {
    console.log(this.newSize);

    let unite = prompt('Veuillez saisir une unité');
    this.textSize = this.newSize.nativeElement.value + unite;
  }
}
