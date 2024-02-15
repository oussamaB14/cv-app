import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountItemComponent } from './account/account-item/account-item.component';
import { DirectComponent } from './direct/direct.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { NoAvatarPipe } from './pipes/no-avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    DetailsComponent,
    ItemComponent,
    AccountComponent,
    AccountFormComponent,
    AccountListComponent,
    AccountItemComponent,
    DirectComponent,
    ServersComponent,
    ServerComponent,
    ShortPipe,
    FilterPipe,
    NoAvatarPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
