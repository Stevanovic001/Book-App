import { Component, OnInit } from '@angular/core';
import { EBookStatus, IBook } from '../shared/models/Book';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../auth/user.service';
import { BookService } from '../services/book/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns = [ "cover",  "name", "author", "date", "price", "genre","addToCart"];

  bookSource = new MatTableDataSource<IBook>();

  constructor(public userService:UserService,private bookService: BookService,private snack:MatSnackBar){ }

  ngOnInit(): void {
    this.bookSource.data = this.bookService.getBooks()
  }

  doFilter(filterValue: string){
    this.bookSource.filter = filterValue.trim().toLowerCase();
  }
  addToCart(bookId:number): any {

    if(this.userService.currentUser == null) {
      return this.snack.open("Morate biti ulogovani", "u redu", {duration: 3000});
    }
    let selectedBook = this.bookService.books.find(book => book.id == bookId);
    selectedBook!.status = EBookStatus.U_TOKU;
    this.userService.currentUser.cart.push(selectedBook);
    this.userService.total += selectedBook!.price;
    console.log(this.userService.currentUser.cart);
    return this.snack.open("Uspesno ste dodali knjigu u korpu", "u redu", {duration: 3000});

  }

}
