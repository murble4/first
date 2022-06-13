import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './../card/card.component';
import { CardListComponent } from './../card-list/card-list.component';
import { CardNewComponent } from './../card-new/card-new.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    CardListComponent,
    CardNewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
