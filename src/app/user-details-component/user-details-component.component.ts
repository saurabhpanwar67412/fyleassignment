import { Component, OnInit } from '@angular/core';
import {} from '../pagination-component/pagination-component.component';
// import { MatGridListModule } from '@angular/material';
import {MatGridTileHarness} from '@angular/material/grid-list/testing';
import {DataService} from '../services/data.service';
import { SpinnerServiceService } from '../services/spinner-service.service';





@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponentComponent implements OnInit {
  wait : boolean =  true

  data : any= [];
  constructor(private service:DataService,public spinnerService: SpinnerServiceService) { 

//  var imageUrl  = imageurl;
  }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe(response => {
          this.data.push(response);
          console.log("this data from source",this.data);
          this.wait= false;
        });
  }

}
