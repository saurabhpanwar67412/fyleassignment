import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  panelOpenState = false;
  data : any = []
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getrepodata()
    .subscribe(response => {
      this.data.push(response);
     
      
    });


  }

  

}
