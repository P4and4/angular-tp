import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(  private cvService: CvService

    ) {
  }

  ngOnInit() {
  }
}


