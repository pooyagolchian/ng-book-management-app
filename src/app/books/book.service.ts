import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of , throwError } from 'rxjs';
import { AddBook } from './book.actions';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
    
  }
  AddBook(book:Book): Observable<Book> {
      return of(book);
    }
}

