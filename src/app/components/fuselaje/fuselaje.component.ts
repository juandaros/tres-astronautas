import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {

  @Input() planeta;
  @Input() grados;

  @Input() whiteText;

  countdown;
  remainingTime = 10;

  constructor() { }

  ngOnInit() {
  }

}
