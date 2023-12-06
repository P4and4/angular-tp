import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Personne} from "../../Model/Personne";
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
@Input() personne! : Personne;

constructor(private embaucherService: EmbaucheService,
  ) {
}

ngOnInit() {
}
embaucher(){
  this.embaucherService.embaucher(this.personne);
}
}
