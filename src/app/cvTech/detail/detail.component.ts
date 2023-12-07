import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import {Personne} from "../../Model/Personne";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne! : Personne ;
  constructor(  private cvService:
                  CvService,
                private activatedRoute: ActivatedRoute

    ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params['id']);
      }
    )
  }
}


