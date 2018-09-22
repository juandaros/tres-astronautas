import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {

  @Input() remainingTime = 10;

  constructor() { }

  ngOnInit() {
  }

}
