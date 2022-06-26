// import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter'
})

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.css']
// })
export class FilterComponent implements PipeTransform {

  constructor() { }

  ngOnInit(): void {
  }

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.cliente.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post)
      }
    }
    return resultPosts;
  }

}
