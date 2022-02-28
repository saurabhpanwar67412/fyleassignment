import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DataService} from '../services/data.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponentComponent implements OnInit {
  data : any = []
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5,10];
    // MatPaginator Output

  pagenumber: number = 10;

 
  constructor(private service:DataService, ) { 
    this.fetchingpaginationdata();
  }

  ngOnInit(): void {
   
    
  }
  onChangedPage(pageData: PageEvent){  
    console.log("pageData", pageData.previousPageIndex);  
  //  this.service.Pagenumber= pageData.previousPageIndex;
  }  
  

  fetchingpaginationdata(){
    this.service.getrepodata()
    .subscribe(response => {
      this.data.push(response);
      var count = Object.keys(response).length;
      console.log(count);
      this.length = count;
      

    });

  }

  onpagechange(event : any){
    console.log("on page change",event)
    const startindex = event.pageIndex * event.pageSize;
    let endindex = startindex + event.pageSize;
    // if(endindex > this)
  }

  

}


