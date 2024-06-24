import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as bookActions from './book.actions'
import { BookService } from './book.service';
import { AddBook } from './book.actions';
import { map, catchError, mergeMap, of } from "rxjs";



@Injectable()
export class bookEffects {

    AddBook$ = createEffect(() => this.actions$.pipe(ofType(bookActions.AddBook),
        mergeMap((action) =>
            this.BookService.AddBook(action)
                .pipe(
                    map((book) => bookActions.AddBookSuccess(book)),
                    catchError((error) => of(bookActions.AddBookFailure({ error })))
                )
        )));

    constructor(
        private actions$: Actions,
        private BookService: BookService
    ) {

     }


}