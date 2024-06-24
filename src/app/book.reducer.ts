import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook, AddBookSuccess, AddBookFailure } from "./books/book.actions";
import { Book } from "./models/book";


export const initialState: Book[] = [];
export const bookReducer = createReducer(
    initialState, 
    on(AddBook, (state) => {return state}),
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => {
        console.error(error);
        return state
    }),
    on(RemoveBook, (state,{bookId}) => state.filter((book:Book) => book.id!== bookId))
);


