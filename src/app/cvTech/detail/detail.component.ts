import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne! : Personne ;
  constructor(  private cvService:
                  CvService

    ) {
  }

  ngOnInit() {
  }
}


