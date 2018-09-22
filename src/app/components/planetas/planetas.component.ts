import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../../providers/planetas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planeta = undefined;
  grados = undefined;
  img = undefined;

  constructor(
    public _planetasService: PlanetasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    _planetasService.obtenerPlanetas().then(() => {
      
      activatedRoute.params.subscribe((result) => {
        
        this.planeta = result['planeta'];
        if (!(this.planeta in _planetasService.planetas)){
          return router.navigate(['/inicio']);
        }

        let temp = _planetasService.planetas[this.planeta];
        this.grados = temp.degrees;
        this.img = temp.img;
      });

    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
