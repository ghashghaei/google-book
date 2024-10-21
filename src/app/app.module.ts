import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreModule } from '@ngrx/store';
import { bookshelfReducer } from './store/bookshelf.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    BookshelfComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ bookshelf: bookshelfReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
