import { Component, ViewChild } from '@angular/core';
import { DrinkService } from "../../services/drink.service";
import {MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-cocktails-table',
  templateUrl: './cocktails-table.component.html',
  styleUrls: ['./cocktaiks-table.component.css']
})
export class CocktailsTableComponent {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [ 'strDrink', 'strInstructionsES', 'dateModified', 'strGlass' ]

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor( private drinkService : DrinkService) {

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.drinkService.getInformation().subscribe((response: any) => {
      if (response && Array.isArray(response.drinks)) {
        this.dataSource.data = response.drinks;
        console.log(this.dataSource.data);
      } else {
        console.error("Invalid data service.");
      }
    });
  }


}
