import { IResultData } from './../../../@core/interfaces/result-data.interface';
import { Component, OnInit } from '@angular/core';
import { DocumentNode } from 'graphql';
import { GENRE_LIST_QUERY } from '@graphql/operations/query/genre';
import { ITableColumns } from '@core/interfaces/table-columns.interface';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  query: DocumentNode = GENRE_LIST_QUERY;
  context: object;
  itemsPage: number;
  resultData: IResultData;
  columns: Array<ITableColumns>;
  include: boolean;
  constructor() { }

  ngOnInit(): void {
    this.context = {};
    this.itemsPage = 10;
    this.resultData = {
      listKey: 'genres',
      definitionKey: 'genres'
    };
    this.include = false;
    this.columns = [
      {
        property: 'id',
        label: '#'
      },
      {
        property: 'name',
        label: 'Nombre del género'
      },
      {
        property: 'slug',
        label: 'Slug'
      }
    ];
  }

}
