import { AppModule } from './../../app.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Subject, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class SynonymousService {
  word$ = new Subject();
  loading$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  getSynonyms(word) : Observable<any>{
    this.loading$.next(true);
    return this.http.get('https://api.datamuse.com/words?ml='+word).pipe(
      map((result)=>{ 
        this.loading$.next(false)
        return result
      })
    )
  }

  setSynonymToChange(synonym){
    this.word$.next(synonym);
  }
  getSynonymToChange(){
    return this.word$.asObservable();
  }

  isLoadingSynonyms(){
    return this.loading$.asObservable();
  }

}