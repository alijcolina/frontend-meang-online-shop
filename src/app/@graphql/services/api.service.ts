import { REGISTER_USER } from './../operations/mutation/user';
import { IRegisterForm } from '@core/interfaces/register.interface';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private apollo: Apollo) { }
  protected get(query: DocumentNode, variables: object = {}, context: object = {}){
    return this.apollo.watchQuery({
      query,
      variables,
      fetchPolicy: 'network-only'
    }).valueChanges.pipe(map((result) => {
      return result.data;
    }));
  }

  set(mutation: DocumentNode, variables: object = {}, context: object = {}){
    return this.apollo.mutate({
      mutation,
      variables,
      context
    }).pipe(
      map((result) => {
        return result.data;
      })
    );
  }
}
